SELECT * FROM session__utilisateur
LEFT JOIN utilisateur ON utilisateur.id_utilisateur = session__utilisateur.id_utilisateur
LEFT JOIN utilisateur__reseau_social ON utilisateur.id_utilisateur = utilisateur__reseau_social.id_utilisateur
LEFT JOIN utilisateur__technologie ON utilisateur.id_utilisateur = utilisateur__technologie.id_utilisateur
LEFT JOIN utilisateur__ressource ON utilisateur.id_utilisateur = utilisateur__ressource.id_utilisateur
WHERE id_session = @id_session and id_niveau = 3
GROUP BY nom_utilisateur