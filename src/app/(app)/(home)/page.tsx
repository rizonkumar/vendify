import configPromise from "@payload-config";
import { getPayload } from "payload";

export default async function Home() {
  const payload = await getPayload({
    config: configPromise,
  });
  console.log("payload from the page", payload);

  const data = await payload.find({
    collection: "users",
  });
  console.log("data", data);

  return <div className="">{JSON.stringify(data, null, 2)}</div>;
}
