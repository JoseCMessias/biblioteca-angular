const isValidDadosAutor = (dado) => {
  for (const key in dado) {
    if (
      !dado[key] ||
      typeof dado[key] !== "string" ||
      dado[key].trim().length < 3
    ) {
      return false;
    }
  }
  return true;
};

const isValidDadosEditora = (dado) => {
  const keysToValidate = ["nome", "localizacao"];
  for (const key of keysToValidate) {
    if (
      !dado[key] ||
      typeof dado[key] !== "string" ||
      dado[key].trim().length < 3
    ) {
      return false;
    }
  }
  return true;
};

const isValidDadosLivros = (dado) => {
  const keysToValidate = [
    "titulo",
    "autor_id_fk",
    "editora_id_fk",
    "ano_publicado",
  ];
  for (const key of keysToValidate) {
    if (key === "titulo") {
      if (
        !dado[key] ||
        typeof dado[key] !== "string" ||
        dado[key].trim().length < 3
      ) {
        return false;
      }
    } else if (
      key === "autor_id_fk" ||
      key === "editora_id_fk" ||
      key === "ano_publicado"
    ) {
      if (typeof dado[key] !== "number" || !Number.isInteger(dado[key])) {
        return false;
      }
    }
  }
  return true;
};

const isValidDadosUsuario = (dado) => {
  const keysToValidate = ["nome", "email", "senha"];
  for (const key of keysToValidate) {
    if (
      !dado[key] ||
      typeof dado[key] !== "string" ||
      dado[key].trim().length < 3
    ) {
      return false;
    }
  }
  return true;
};

export default {
  isValidDadosAutor,
  isValidDadosEditora,
  isValidDadosLivros,
  isValidDadosUsuario
};