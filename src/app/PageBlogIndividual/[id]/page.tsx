"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { use } from "react";
import Link from "next/link";
import styles from "../../PageBlog/css/PageBlog.module.css";

// Интерфейс для отдельной статьи
interface Blog {
  id: string;
  name: string;
  title: string;
  description: string;
  urlphoto: string;
}

// Интерфейс для внутренней структуры bodyData
interface BlogItem {
  title: string;
  description: { text: string }[];
  blog: Blog[];
}

// Интерфейс для полного JSON
interface BlogData {
  bodyData: BlogItem;
}

export default function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [post, setPost] = useState<Blog | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("Fetching data for ID:", resolvedParams.id);

    fetch("/PageBlog.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Не удалось загрузить JSON: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data: BlogData) => {
        console.log("Loaded JSON:", data);
        // Исправляем доступ к blog: теперь data.bodyData.blog
        const foundPost = data.bodyData.blog.find((p) => {
          console.log("Checking post ID:", p.id);
          // Приводим p.id к строке, так как resolvedParams.id — строка
          return String(p.id) === resolvedParams.id;
        });
        if (!foundPost) {
          throw new Error(`Статья с ID ${resolvedParams.id} не найдена`);
        }
        setPost(foundPost);
      })
      .catch((error) => {
        console.error("Ошибка загрузки данных:", error);
        setError(error.message);
      });
  }, [resolvedParams.id]);

  if (error) {
    return (
      <div className={styles.container}>
        <h1>Ошибка</h1>
        <p>{error}</p>
        <Link href="/PageBlogIndividual" className={styles.backLink}>
          Вернуться к блогу
        </Link>
      </div>
    );
  }

  if (!post) {
    return <div>Завантаження...</div>;
  }

  return (
    <div className={styles.container}>
      <h1>{post.title}</h1>
      <Image
        src={post.urlphoto}
        alt={post.title}
        width={800}
        height={500}
        className={styles.image}
      />
      <p className={styles.description}>{post.description}</p>
      <Link href="/PageBlogIndividual" className={styles.backLink}>
        Вернуться к блогу
      </Link>
    </div>
  );
}