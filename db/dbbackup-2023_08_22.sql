--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Drop databases (except postgres and template1)
--

DROP DATABASE db;
DROP DATABASE db_test_e2e;




--
-- Drop roles
--

DROP ROLE postgres;


--
-- Roles
--

CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:cTKxtpUIf3vA1YGKw8A4ZQ==$iqMugkFWJmfWTc3Nz7WckcPv7gMKr4PsthBlPyjXQec=:lbOf1pBCQ36dvbZ1STE6weFNwVfuqdcnFcou/2+U0o4=';

--
-- User Configurations
--








--
-- Databases
--

--
-- Database "template1" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3
-- Dumped by pg_dump version 15.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

UPDATE pg_catalog.pg_database SET datistemplate = false WHERE datname = 'template1';
DROP DATABASE template1;
--
-- Name: template1; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE template1 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE template1 OWNER TO postgres;

\connect template1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE template1; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE template1 IS 'default template for new databases';


--
-- Name: template1; Type: DATABASE PROPERTIES; Schema: -; Owner: postgres
--

ALTER DATABASE template1 IS_TEMPLATE = true;


\connect template1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE template1; Type: ACL; Schema: -; Owner: postgres
--

REVOKE CONNECT,TEMPORARY ON DATABASE template1 FROM PUBLIC;
GRANT CONNECT ON DATABASE template1 TO PUBLIC;


--
-- PostgreSQL database dump complete
--

--
-- Database "db" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3
-- Dumped by pg_dump version 15.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: db; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE db OWNER TO postgres;

\connect db

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Post; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Post" (
    id text NOT NULL,
    content text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "authorId" text NOT NULL
);


ALTER TABLE public."Post" OWNER TO postgres;

--
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    id text NOT NULL,
    email text NOT NULL,
    name text,
    password text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Data for Name: Post; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Post" (id, content, "createdAt", "updatedAt", "authorId") FROM stdin;
4fb532d5-cd23-4e72-a702-f3e8e6fb75e6	Itaque accusantium id ab facere facilis cumque. Dolore et velit consequuntur sequi delectus debitis. Corporis placeat laborum porro dicta accusantium natus possimus.	2023-08-23 02:15:21.702	2023-08-23 02:15:21.702	eafc2ce4-1557-4ed1-90b7-ea8eb9e70c26
2aac8672-1d2b-46bc-8432-1565e5487c90	Perferendis consequuntur explicabo expedita eum culpa corrupti pariatur doloremque. Aliquam veritatis asperiores. Maiores iure quis.	2023-08-23 02:15:21.705	2023-08-23 02:15:21.705	f4dd807e-a54a-4b81-b4c2-37d6560b29f8
7ac148bb-d037-4eaf-9d62-375ee1ef3ed8	Quasi dicta autem provident nobis sed. Deleniti consequuntur possimus veritatis et consectetur a odio laboriosam. Eaque dolores perferendis ipsa.	2023-08-23 02:15:21.707	2023-08-23 02:15:21.707	0bb4a1c0-ff93-40ac-ac2a-b1e73f9c3513
75d8c45a-9c5c-4343-b925-379fbe1e04bb	Veritatis possimus occaecati dolorem eos magnam laudantium ipsa veritatis temporibus. Labore dignissimos dolore rem. Qui veritatis id nesciunt quo libero.	2023-08-23 02:15:21.708	2023-08-23 02:15:21.708	6b2d15a3-24f2-4c2d-8103-196197b8bf55
682ee2c0-e9f4-4646-b1d6-d16736ee0857	Ullam nisi voluptatum voluptatem voluptatibus delectus eligendi. Magni est consequuntur ab odit porro dignissimos itaque vero neque. Ea earum fugiat reiciendis nostrum quo quibusdam nesciunt.	2023-08-23 02:15:21.709	2023-08-23 02:15:21.709	49ac531f-f5b2-477d-b00b-04ceaeee7d60
9bb0e2d0-6e3e-4336-8051-5ad086ce1dd9	Voluptatibus veniam suscipit blanditiis. Fuga assumenda ipsum quam. Voluptate ipsum dignissimos reiciendis iusto in minima aliquid.	2023-08-23 02:15:21.711	2023-08-23 02:15:21.711	29d96847-1e26-45d8-9c47-e30fefdd9dc0
6473b9ef-449a-4a91-b8ee-74b6cd5ed9c5	Atque iste error necessitatibus numquam. Magni laudantium nostrum. Vitae temporibus animi.	2023-08-23 02:15:21.712	2023-08-23 02:15:21.712	a5a9d413-1161-4bcc-a534-4e211123ad87
5684969d-9481-486d-9667-a3ef918aea69	Amet et ipsam rem atque impedit aperiam autem. Quia dignissimos sint natus. Pariatur enim officia quam.	2023-08-23 02:15:21.713	2023-08-23 02:15:21.713	5b148b56-aa93-4324-8f97-354896d893a3
9f790794-75db-4b9c-b2dd-92cd290a1f3f	Ipsa libero unde. Voluptatibus quam cumque autem optio officia quae dignissimos. Quisquam fugiat id voluptatibus fugit modi molestias iusto.	2023-08-23 02:15:21.714	2023-08-23 02:15:21.714	e388ad94-33c1-4d4e-adca-dc203bfd623f
a1da1699-3655-4d7c-be2d-227798cba461	Velit dignissimos temporibus praesentium veniam. Possimus aliquid saepe ipsam veritatis vel dolore pariatur magnam expedita. Odio porro voluptatum temporibus quae quia sint reiciendis saepe aut.	2023-08-23 02:15:21.715	2023-08-23 02:15:21.715	c1dd8f30-1709-4bea-96a3-7e2c9006f94b
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (id, email, name, password, "createdAt", "updatedAt") FROM stdin;
eafc2ce4-1557-4ed1-90b7-ea8eb9e70c26	Russ31@yahoo.com	reiciendis pariatur	AHVFLckoUE01ZwS	2023-08-23 02:15:21.661	2023-08-23 02:15:21.661
f4dd807e-a54a-4b81-b4c2-37d6560b29f8	Leone_Turcotte77@hotmail.com	sint impedit	qNyIbzi5sRUsg2A	2023-08-23 02:15:21.673	2023-08-23 02:15:21.673
0bb4a1c0-ff93-40ac-ac2a-b1e73f9c3513	Brandi64@yahoo.com	laudantium ducimus	0Z5JxpkB6Vwigob	2023-08-23 02:15:21.676	2023-08-23 02:15:21.676
6b2d15a3-24f2-4c2d-8103-196197b8bf55	Trace42@yahoo.com	quas eius	Ew_zz5e8vapHDvH	2023-08-23 02:15:21.68	2023-08-23 02:15:21.68
49ac531f-f5b2-477d-b00b-04ceaeee7d60	Estell_Jakubowski@yahoo.com	culpa nostrum	WLjFumkutwlnxxt	2023-08-23 02:15:21.681	2023-08-23 02:15:21.681
29d96847-1e26-45d8-9c47-e30fefdd9dc0	Vergie.Schoen9@gmail.com	debitis repudiandae	7c9wAJPkq__jokk	2023-08-23 02:15:21.684	2023-08-23 02:15:21.684
a5a9d413-1161-4bcc-a534-4e211123ad87	Marjory_Spencer@hotmail.com	labore asperiores	B66CvXhihddAG_A	2023-08-23 02:15:21.688	2023-08-23 02:15:21.688
5b148b56-aa93-4324-8f97-354896d893a3	Tommie_Goldner@yahoo.com	quas quae	LaxI8BKuQyi6FpO	2023-08-23 02:15:21.691	2023-08-23 02:15:21.691
e388ad94-33c1-4d4e-adca-dc203bfd623f	Demond86@yahoo.com	accusamus neque	mvuoKRwFmtUNtEz	2023-08-23 02:15:21.696	2023-08-23 02:15:21.696
c1dd8f30-1709-4bea-96a3-7e2c9006f94b	Palma.Hermann@yahoo.com	facere in	mzk_DpOkibC6gK5	2023-08-23 02:15:21.699	2023-08-23 02:15:21.699
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
0c986a00-99b8-48fc-b49b-bb9dd3bd4350	4bd4ddaf74af2595d24a6af14b63c2505bdb3a1e63c3b751df34121c1aa8764a	2023-08-23 02:15:14.704535+00	20230822012653_init	\N	\N	2023-08-23 02:15:14.691212+00	1
\.


--
-- Name: Post Post_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Post"
    ADD CONSTRAINT "Post_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- Name: Post Post_authorId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Post"
    ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

--
-- Database "db_test_e2e" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3
-- Dumped by pg_dump version 15.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: db_test_e2e; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE db_test_e2e WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE db_test_e2e OWNER TO postgres;

\connect db_test_e2e

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3
-- Dumped by pg_dump version 15.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE postgres;
--
-- Name: postgres; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE postgres OWNER TO postgres;

\connect postgres

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database cluster dump complete
--

