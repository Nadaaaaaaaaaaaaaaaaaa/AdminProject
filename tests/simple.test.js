const app = require("../SourceCode/MainIndex");
const supertest = require("supertest");

test("GET /", done => {
  supertest(app)
    .get("/")
    .expect(200)
    .end((err, res) => {
      // Ajoutez un log pour vérifier la réponse réelle du serveur
      console.log("Server response:", res.text);

      // Normaliser les espaces dans les deux chaînes
      const actual = res.text.replace(/\s+/g, ' ').trim();
      const expected = "<h1> ISIMM 24/25 : ING2 </h1>".replace(/\s+/g, ' ').trim();

      // Vérifiez que les deux chaînes normalisées sont identiques
      expect(actual).toBe(expected);
      done(err);
    });
});




