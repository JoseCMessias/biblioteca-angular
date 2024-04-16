create table autores (
	autor_id serial primary key,
	nome varchar(100) not null
)

insert into autores(nome) values ('Autor 1');
insert into autores(nome) values ('Autor 2');
insert into autores(nome) values ('Autor 3');

select * from autores;

create table editoras (
	editora_id serial primary key,
	nome varchar(100) not null,
	localizacao varchar(100) not null
);

insert into editoras(nome, localizacao) values ('Editora A', 'Cidade A');
insert into editoras(nome, localizacao) values ('Editora B', 'Cidade B');
insert into editoras(nome, localizacao) values ('Editora C', 'Cidade C');

select * from editoras;

create table livros (
	livro_id serial primary key,
	titulo varchar(30) not null,
	autor_id_fk integer not null,
	editora_id_fk integer not null,
	ano_publicado integer not null,
	foreign key (autor_id_fk) references autores(autor_id),
	foreign key (editora_id_fk) references editoras(editora_id)
);

insert into livros(titulo, autor_id_fk, editora_id_fk, ano_publicado) values ('Livro 1', 1, 1, 2020);
insert into livros(titulo, autor_id_fk, editora_id_fk, ano_publicado) values ('Livro 1.1', 1, 1, 2022);
insert into livros(titulo, autor_id_fk, editora_id_fk, ano_publicado) values ('Livro 2', 2, 2, 2018);
insert into livros(titulo, autor_id_fk, editora_id_fk, ano_publicado) values ('Livro 2.1', 2, 2, 2010);
insert into livros(titulo, autor_id_fk, editora_id_fk, ano_publicado) values ('Livro 3', 3, 3, 2022);
insert into livros(titulo, autor_id_fk, editora_id_fk, ano_publicado) values ('Livro 3.1', 3, 3, 2024);

select * from livros;

// 2.1 Listar todos os livros com seus autores e editoras

select 	livros.titulo as "Livro",
		autores.nome as "Autor", 
		editoras.nome as "Editora"
from livros
join autores on livros.autor_id_fk  = autores.autor_id 
join editoras on livros.editora_id_fk = editoras.editora_id
order by livros.titulo asc;

// 2.2 Encontrar livros de um autor específico (‘Autor1’)

select livros.titulo 
from livros
join autores on livros.autor_id_fk = autores.autor_id
where nome = 'Autor 1';

// 2.3 Contar o número de livros publicados por editora.

select	editoras.nome, 
count(*) as "Livros publicados por editoras"
from livros
join editoras on livros.editora_id_fk = editoras.editora_id
group by editoras.nome;

// 2.4 Atualizar o ano de publicação do livro ‘Livro 1’ para 2021.

update livros
set ano_publicado = 2024
where titulo  = 'Livro 1';


