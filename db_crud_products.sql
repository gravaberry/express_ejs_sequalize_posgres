PGDMP      #                |            crud_products    16.1    16.1     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16710    crud_products    DATABASE     �   CREATE DATABASE crud_products WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE crud_products;
                postgres    false            �            1259    16766    products    TABLE     (  CREATE TABLE public.products (
    id integer NOT NULL,
    nama_barang character varying(255) NOT NULL,
    harga_barang character varying(255) NOT NULL,
    keterangan character varying(255),
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);
    DROP TABLE public.products;
       public         heap    postgres    false            �            1259    16765    products_id_seq    SEQUENCE     �   CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.products_id_seq;
       public          postgres    false    216            �           0    0    products_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;
          public          postgres    false    215            P           2604    16769    products id    DEFAULT     j   ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);
 :   ALTER TABLE public.products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216            �          0    16766    products 
   TABLE DATA           e   COPY public.products (id, nama_barang, harga_barang, keterangan, created_at, updated_at) FROM stdin;
    public          postgres    false    216   n       �           0    0    products_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.products_id_seq', 5, true);
          public          postgres    false    215            R           2606    16773    products products_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    216            �   r   x�3�v
s�47� N� W�� GO�N##]c]#CC3+cc+SS=CKKms<R\��>�%�
�����P����\<��5�X��X`1����@���dd� f�#6     