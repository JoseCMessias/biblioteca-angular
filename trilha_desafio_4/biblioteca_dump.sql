PGDMP     -    $                |            postgres %   14.11 (Ubuntu 14.11-0ubuntu0.22.04.1) %   14.11 (Ubuntu 14.11-0ubuntu0.22.04.1)     2           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            3           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            4           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            5           1262    13799    postgres    DATABASE     ]   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'pt_BR.UTF-8';
    DROP DATABASE postgres;
                postgres    false            6           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3381                        2615    24576 
   biblioteca    SCHEMA        CREATE SCHEMA biblioteca;
    DROP SCHEMA biblioteca;
                postgres    false            �            1259    24578    autores    TABLE     m   CREATE TABLE biblioteca.autores (
    autor_id integer NOT NULL,
    nome character varying(100) NOT NULL
);
    DROP TABLE biblioteca.autores;
    
   biblioteca         heap 
   biblioteca    false    5            �            1259    24577    autores_autor_id_seq    SEQUENCE     �   CREATE SEQUENCE biblioteca.autores_autor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE biblioteca.autores_autor_id_seq;
    
   biblioteca       
   biblioteca    false    5    211            7           0    0    autores_autor_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE biblioteca.autores_autor_id_seq OWNED BY biblioteca.autores.autor_id;
       
   biblioteca       
   biblioteca    false    210            �            1259    24585    editoras    TABLE     �   CREATE TABLE biblioteca.editoras (
    editora_id integer NOT NULL,
    nome character varying(100) NOT NULL,
    localizacao character varying(100) NOT NULL
);
     DROP TABLE biblioteca.editoras;
    
   biblioteca         heap 
   biblioteca    false    5            �            1259    24584    editoras_editora_id_seq    SEQUENCE     �   CREATE SEQUENCE biblioteca.editoras_editora_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 2   DROP SEQUENCE biblioteca.editoras_editora_id_seq;
    
   biblioteca       
   biblioteca    false    213    5            8           0    0    editoras_editora_id_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE biblioteca.editoras_editora_id_seq OWNED BY biblioteca.editoras.editora_id;
       
   biblioteca       
   biblioteca    false    212            �            1259    24592    livros    TABLE     �   CREATE TABLE biblioteca.livros (
    livro_id integer NOT NULL,
    titulo character varying(30) NOT NULL,
    autor_id_fk integer NOT NULL,
    editora_id_fk integer NOT NULL,
    ano_publicado integer NOT NULL
);
    DROP TABLE biblioteca.livros;
    
   biblioteca         heap 
   biblioteca    false    5            �            1259    24591    livros_livro_id_seq    SEQUENCE     �   CREATE SEQUENCE biblioteca.livros_livro_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE biblioteca.livros_livro_id_seq;
    
   biblioteca       
   biblioteca    false    5    215            9           0    0    livros_livro_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE biblioteca.livros_livro_id_seq OWNED BY biblioteca.livros.livro_id;
       
   biblioteca       
   biblioteca    false    214            �           2604    24581    autores autor_id    DEFAULT     |   ALTER TABLE ONLY biblioteca.autores ALTER COLUMN autor_id SET DEFAULT nextval('biblioteca.autores_autor_id_seq'::regclass);
 C   ALTER TABLE biblioteca.autores ALTER COLUMN autor_id DROP DEFAULT;
    
   biblioteca       
   biblioteca    false    210    211    211            �           2604    24588    editoras editora_id    DEFAULT     �   ALTER TABLE ONLY biblioteca.editoras ALTER COLUMN editora_id SET DEFAULT nextval('biblioteca.editoras_editora_id_seq'::regclass);
 F   ALTER TABLE biblioteca.editoras ALTER COLUMN editora_id DROP DEFAULT;
    
   biblioteca       
   biblioteca    false    212    213    213            �           2604    24595    livros livro_id    DEFAULT     z   ALTER TABLE ONLY biblioteca.livros ALTER COLUMN livro_id SET DEFAULT nextval('biblioteca.livros_livro_id_seq'::regclass);
 B   ALTER TABLE biblioteca.livros ALTER COLUMN livro_id DROP DEFAULT;
    
   biblioteca       
   biblioteca    false    214    215    215            +          0    24578    autores 
   TABLE DATA           5   COPY biblioteca.autores (autor_id, nome) FROM stdin;
 
   biblioteca       
   biblioteca    false    211   w        -          0    24585    editoras 
   TABLE DATA           E   COPY biblioteca.editoras (editora_id, nome, localizacao) FROM stdin;
 
   biblioteca       
   biblioteca    false    213   �        /          0    24592    livros 
   TABLE DATA           a   COPY biblioteca.livros (livro_id, titulo, autor_id_fk, editora_id_fk, ano_publicado) FROM stdin;
 
   biblioteca       
   biblioteca    false    215   �        :           0    0    autores_autor_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('biblioteca.autores_autor_id_seq', 3, true);
       
   biblioteca       
   biblioteca    false    210            ;           0    0    editoras_editora_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('biblioteca.editoras_editora_id_seq', 3, true);
       
   biblioteca       
   biblioteca    false    212            <           0    0    livros_livro_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('biblioteca.livros_livro_id_seq', 6, true);
       
   biblioteca       
   biblioteca    false    214            �           2606    24583    autores autores_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY biblioteca.autores
    ADD CONSTRAINT autores_pkey PRIMARY KEY (autor_id);
 B   ALTER TABLE ONLY biblioteca.autores DROP CONSTRAINT autores_pkey;
    
   biblioteca         
   biblioteca    false    211            �           2606    24590    editoras editoras_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY biblioteca.editoras
    ADD CONSTRAINT editoras_pkey PRIMARY KEY (editora_id);
 D   ALTER TABLE ONLY biblioteca.editoras DROP CONSTRAINT editoras_pkey;
    
   biblioteca         
   biblioteca    false    213            �           2606    24597    livros livros_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY biblioteca.livros
    ADD CONSTRAINT livros_pkey PRIMARY KEY (livro_id);
 @   ALTER TABLE ONLY biblioteca.livros DROP CONSTRAINT livros_pkey;
    
   biblioteca         
   biblioteca    false    215            �           2606    24598    livros livros_autor_id_fk_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY biblioteca.livros
    ADD CONSTRAINT livros_autor_id_fk_fkey FOREIGN KEY (autor_id_fk) REFERENCES biblioteca.autores(autor_id);
 L   ALTER TABLE ONLY biblioteca.livros DROP CONSTRAINT livros_autor_id_fk_fkey;
    
   biblioteca       
   biblioteca    false    215    211    3224            �           2606    24603     livros livros_editora_id_fk_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY biblioteca.livros
    ADD CONSTRAINT livros_editora_id_fk_fkey FOREIGN KEY (editora_id_fk) REFERENCES biblioteca.editoras(editora_id);
 N   ALTER TABLE ONLY biblioteca.livros DROP CONSTRAINT livros_editora_id_fk_fkey;
    
   biblioteca       
   biblioteca    false    215    3226    213            +       x�3�t,-�/R0�2������,c�=... � �      -   1   x�3�tM�,�/JTp�t�LILIUp�2�:������0Ag�=... ���      /   K   x�3���,+�W0�3�A###.c��'Zp����ꠂ\�PAcNk5�	�AM�a���0����� vGE     