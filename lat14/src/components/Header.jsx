export default function Header({ author }) {
  return <h1>Selamat Datang {author ? author : "Haidar"}</h1>;
}

