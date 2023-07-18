import { Button, Container, LoadingWrapper, SettingsModal } from "@/components";
import { Layout } from "@/layouts";
import { setDefault } from "@/redux/slices/settingsSlice";
import { useDispatch } from "react-redux";
import { useAxios } from "../hooks";
import { categoriesUrl } from "@/utils/urls";
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const dispatch = useDispatch();
  const { response, loading } = useAxios(categoriesUrl);

  useEffect(() => {
    if (response) {
      dispatch(
        setDefault({ name: "categories", id: response.trivia_categories[0].id })
      );
    }
  }, [response]);

  return (
    <Layout>
      <LoadingWrapper loading={loading}>
        <SettingsModal response={response} />
        <Container className="flex flex-col items-center justify-center gap-10 h-full">
          <h1 className="text-8xl text-blue-900">Ready for Quiz?</h1>
          <p className="w-1/3 text-center text-red-800">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
            quidem neque! Tenetur hic quae dicta harum magni autem, aut
            voluptates facere. A velit beatae, ducimus ut culpa explicabo
            asperiores inventore id maxime veniam, impedit iste sit sapiente.
          </p>
          <Link href="/questions">
            <Button text="Start quiz" type="secondary" />
          </Link>
        </Container>
      </LoadingWrapper>
    </Layout>
  );
}
