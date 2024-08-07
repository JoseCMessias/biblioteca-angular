PGDMP         %                |            postgres %   14.12 (Ubuntu 14.12-0ubuntu0.22.04.1) %   14.12 (Ubuntu 14.12-0ubuntu0.22.04.1) &    =           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            >           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            @           1262    13799    postgres    DATABASE     ]   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'pt_BR.UTF-8';
    DROP DATABASE postgres;
                postgres    false            A           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3392                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                postgres    false            B           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   postgres    false    3            �            1259    58406    autores    TABLE     i   CREATE TABLE public.autores (
    autor_id integer NOT NULL,
    nome character varying(100) NOT NULL
);
    DROP TABLE public.autores;
       public         heap 
   biblioteca    false    3            �            1259    58405    autores_autor_id_seq    SEQUENCE     �   CREATE SEQUENCE public.autores_autor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.autores_autor_id_seq;
       public       
   biblioteca    false    3    212            C           0    0    autores_autor_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.autores_autor_id_seq OWNED BY public.autores.autor_id;
          public       
   biblioteca    false    211            �            1259    58413    editoras    TABLE     �   CREATE TABLE public.editoras (
    editora_id integer NOT NULL,
    nome character varying(100) NOT NULL,
    localizacao character varying(100) NOT NULL
);
    DROP TABLE public.editoras;
       public         heap 
   biblioteca    false    3            �            1259    58412    editoras_editora_id_seq    SEQUENCE     �   CREATE SEQUENCE public.editoras_editora_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.editoras_editora_id_seq;
       public       
   biblioteca    false    214    3            D           0    0    editoras_editora_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.editoras_editora_id_seq OWNED BY public.editoras.editora_id;
          public       
   biblioteca    false    213            �            1259    58420    livros    TABLE     �   CREATE TABLE public.livros (
    livro_id integer NOT NULL,
    titulo character varying(100) NOT NULL,
    autor_id_fk integer NOT NULL,
    editora_id_fk integer NOT NULL,
    ano_publicado integer NOT NULL
);
    DROP TABLE public.livros;
       public         heap 
   biblioteca    false    3            �            1259    58419    livros_livro_id_seq    SEQUENCE     �   CREATE SEQUENCE public.livros_livro_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.livros_livro_id_seq;
       public       
   biblioteca    false    216    3            E           0    0    livros_livro_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.livros_livro_id_seq OWNED BY public.livros.livro_id;
          public       
   biblioteca    false    215            �            1259    58396    usuarios    TABLE     �   CREATE TABLE public.usuarios (
    usuario_id integer NOT NULL,
    nome character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    senha character varying(16) NOT NULL
);
    DROP TABLE public.usuarios;
       public         heap 
   biblioteca    false    3            �            1259    58395    usuarios_usuario_id_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_usuario_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.usuarios_usuario_id_seq;
       public       
   biblioteca    false    3    210            F           0    0    usuarios_usuario_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.usuarios_usuario_id_seq OWNED BY public.usuarios.usuario_id;
          public       
   biblioteca    false    209            �           2604    58409    autores autor_id    DEFAULT     t   ALTER TABLE ONLY public.autores ALTER COLUMN autor_id SET DEFAULT nextval('public.autores_autor_id_seq'::regclass);
 ?   ALTER TABLE public.autores ALTER COLUMN autor_id DROP DEFAULT;
       public       
   biblioteca    false    211    212    212            �           2604    58416    editoras editora_id    DEFAULT     z   ALTER TABLE ONLY public.editoras ALTER COLUMN editora_id SET DEFAULT nextval('public.editoras_editora_id_seq'::regclass);
 B   ALTER TABLE public.editoras ALTER COLUMN editora_id DROP DEFAULT;
       public       
   biblioteca    false    213    214    214            �           2604    58423    livros livro_id    DEFAULT     r   ALTER TABLE ONLY public.livros ALTER COLUMN livro_id SET DEFAULT nextval('public.livros_livro_id_seq'::regclass);
 >   ALTER TABLE public.livros ALTER COLUMN livro_id DROP DEFAULT;
       public       
   biblioteca    false    215    216    216            �           2604    58399    usuarios usuario_id    DEFAULT     z   ALTER TABLE ONLY public.usuarios ALTER COLUMN usuario_id SET DEFAULT nextval('public.usuarios_usuario_id_seq'::regclass);
 B   ALTER TABLE public.usuarios ALTER COLUMN usuario_id DROP DEFAULT;
       public       
   biblioteca    false    210    209    210            6          0    58406    autores 
   TABLE DATA           1   COPY public.autores (autor_id, nome) FROM stdin;
    public       
   biblioteca    false    212   b)       8          0    58413    editoras 
   TABLE DATA           A   COPY public.editoras (editora_id, nome, localizacao) FROM stdin;
    public       
   biblioteca    false    214   �)       :          0    58420    livros 
   TABLE DATA           ]   COPY public.livros (livro_id, titulo, autor_id_fk, editora_id_fk, ano_publicado) FROM stdin;
    public       
   biblioteca    false    216   *       4          0    58396    usuarios 
   TABLE DATA           B   COPY public.usuarios (usuario_id, nome, email, senha) FROM stdin;
    public       
   biblioteca    false    210   �*       G           0    0    autores_autor_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.autores_autor_id_seq', 5, true);
          public       
   biblioteca    false    211            H           0    0    editoras_editora_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.editoras_editora_id_seq', 5, true);
          public       
   biblioteca    false    213            I           0    0    livros_livro_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.livros_livro_id_seq', 4, true);
          public       
   biblioteca    false    215            J           0    0    usuarios_usuario_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.usuarios_usuario_id_seq', 1, true);
          public       
   biblioteca    false    209            �           2606    58411    autores autores_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.autores
    ADD CONSTRAINT autores_pkey PRIMARY KEY (autor_id);
 >   ALTER TABLE ONLY public.autores DROP CONSTRAINT autores_pkey;
       public         
   biblioteca    false    212            �           2606    58418    editoras editoras_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.editoras
    ADD CONSTRAINT editoras_pkey PRIMARY KEY (editora_id);
 @   ALTER TABLE ONLY public.editoras DROP CONSTRAINT editoras_pkey;
       public         
   biblioteca    false    214            �           2606    58425    livros livros_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.livros
    ADD CONSTRAINT livros_pkey PRIMARY KEY (livro_id);
 <   ALTER TABLE ONLY public.livros DROP CONSTRAINT livros_pkey;
       public         
   biblioteca    false    216            �           2606    58403    usuarios usuarios_email_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_email_key UNIQUE (email);
 E   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_email_key;
       public         
   biblioteca    false    210            �           2606    58401    usuarios usuarios_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (usuario_id);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public         
   biblioteca    false    210            �           2606    58426    livros livros_autor_id_fk_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.livros
    ADD CONSTRAINT livros_autor_id_fk_fkey FOREIGN KEY (autor_id_fk) REFERENCES public.autores(autor_id);
 H   ALTER TABLE ONLY public.livros DROP CONSTRAINT livros_autor_id_fk_fkey;
       public       
   biblioteca    false    216    3233    212            �           2606    58431     livros livros_editora_id_fk_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.livros
    ADD CONSTRAINT livros_editora_id_fk_fkey FOREIGN KEY (editora_id_fk) REFERENCES public.editoras(editora_id);
 J   ALTER TABLE ONLY public.livros DROP CONSTRAINT livros_editora_id_fk_fkey;
       public       
   biblioteca    false    216    3235    214            6   :   x�3�tN,��Q�Sp)OM��2��)ͬRpJ,*��2��S�H,*Sp�N-����� l��      8   _   x��1
�0 �9yE^��AA*n.�fhm
��O�cz���KsN.�(
-�D�� �S��f�E`*��
I�p�)�[fZٳ6���h�z�"~;n      :   z   x��A
�@��ur��@��
�܎�ݺ:�����x/f��<�ydm�e=Ӆn�z��6ۤ�����ݠ�����S4��U7��bB�O��2-�Z(K[���j��Y�@�c��C��3%      4   /   x�3���/>�R�7��83��3B;��&f��%��rs��qqq U��     