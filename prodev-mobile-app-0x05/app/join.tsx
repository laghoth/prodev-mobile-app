import React, { useState } from "react";

const Join = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ajoute ici la logique d'inscription
    alert(`Inscription avec ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Inscription</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">S'inscrire</button>
    </form>
  );
};

export default Join;
