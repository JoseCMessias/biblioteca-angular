export interface ILivros {
    livro_id?: number;
    titulo: string;
    autor_id_fk: number;
    editora_id_fk: number;
    ano_publicado: number;
}