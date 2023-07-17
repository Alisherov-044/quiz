import {
  Button,
  Card,
  Container,
  LoadingWrapper,
  SettingsModal,
} from "@/components";
import { Layout } from "@/layouts";

export default function index() {
  return (
    <Layout>
      <LoadingWrapper>
        <SettingsModal />
        <Container className="flex items-center justify-center">
          <Card className="flex flex-col w-1/2 h-96 rounded py-4 px-6 bg-gradient-to-b from-purple-900 to-purple-950 text-white">
            <h3 className="text-xl mb-4">1. Question</h3>
            <div className="flex-auto">options</div>
            <div className="flex items-center justify-end gap-4">
              <Button text="Previous" type="primary" />
              <Button text="Next" type="secondary" />
            </div>
          </Card>
        </Container>
      </LoadingWrapper>
    </Layout>
  );
}
