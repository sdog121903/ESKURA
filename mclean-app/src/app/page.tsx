import { getHomePage } from "../data/loaders";
import { notFound } from "next/navigation";

async function loader() {
  const data = await getHomePage();
  if (!data) notFound();
  console.log(data);
  return { ...data.data };}



  export default async function HomeRoute() {
    const data = await loader();
    console.log(data);
    return (

      <div>
        <h1>ESKURA</h1>
        <p>{data.title}</p>
        <p>{data.description}</p>
      </div>

    );
  }


