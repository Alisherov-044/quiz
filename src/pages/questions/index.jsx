import {
  Button,
  Card,
  Container,
  LoadingWrapper,
  SettingsModal,
} from "@/components";
import { Layout } from "@/layouts";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Noto_Serif_JP } from "next/font/google";

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function index() {
  const answers = [
    {
      value: "answer-1",
      label: "Answer 1",
    },
    {
      value: "answer-2",
      label: "Answer 2",
    },
    {
      value: "answer-3",
      label: "Answer 3",
    },
  ];

  return (
    <Layout>
      <LoadingWrapper>
        <SettingsModal />
        <Container className="flex items-center justify-center h-full">
          <Card className="flex flex-col w-1/2 h-96 rounded py-4 px-6 bg-gradient-to-b from-purple-900 to-purple-950 text-red-500">
            <h3 className="text-xl mb-8">
              <span className={notoSerif.className}>№1.</span> Question
            </h3>
            <FormControl className="flex-auto flex flex-col gap-6">
              <RadioGroup>
                {answers.map(({ value, label }, index) => (
                  <FormControlLabel
                    key={index}
                    value={value}
                    control={<Radio />}
                    label={label}
                  />
                ))}
              </RadioGroup>
            </FormControl>
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
