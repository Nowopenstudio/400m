import { NextRequest } from "next/server";
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, writeToken } from "@/env";

// Runs on the server only. The write token never reaches the browser.
const writeClient = createClient({ projectId, dataset, apiVersion, token: writeToken, useCdn: false });

export async function POST(req: NextRequest) {
  if (!writeToken) return Response.json({ error: "Write token not configured" }, { status: 500 });

  let body: any;
  try { body = await req.json(); } catch { return Response.json({ error: "Invalid JSON" }, { status: 400 }); }

  const { firstName, lastName, email, website, answers } = body || {};
  if (typeof firstName !== "string" || typeof lastName !== "string" || typeof email !== "string" || !Array.isArray(answers)) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  // Only the fields the schema defines; nothing else from the request is stored.
  const doc = {
    _type: "application",
    status: "pending",
    firstName: firstName.slice(0, 200),
    lastName: lastName.slice(0, 200),
    email: email.slice(0, 320),
    website: typeof website === "string" && website ? website.slice(0, 2000) : undefined,
    answers: answers.slice(0, 60).map((a: any) => ({
      _type: "single",
      _key: String(a._key || Math.random().toString(36).slice(2)),
      quest: a.quest,
      answer: typeof a.answer === "string" ? a.answer.slice(0, 20000) : "",
    })),
  };

  try {
    const res = await writeClient.create(doc);
    return Response.json({ ok: true, id: res._id });
  } catch (error) {
    return Response.json({ error: "Could not save application" }, { status: 500 });
  }
}
