module.exports = { 
 
  "rules": {
     "@typescript-eslint/no-explicit-any": "off",
       "@typescript-eslint/no-unused-vars": process.env.NODE_ENV === "production" ? "error" : "warn"
  
      },
}