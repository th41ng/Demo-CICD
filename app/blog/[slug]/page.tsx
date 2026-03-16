type Params = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return [
    { slug: "post1" },
    { slug: "post2" },
    { slug: "post3" }
  ];
}

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: Params) {
  return <h1>Slug: {params.slug}<p>ThangMicro</p></h1>;
}