import { Box, Modal } from "@mui/material";
import { Button, SettingsList } from "..";
import { useDispatch, useSelector } from "react-redux";
import { closeSettings } from "@/redux/slices/layoutSlice";

export default function SettingsModal({ response }) {
  const layout = useSelector((state) => state.layout);
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const onModalClose = () => {
    dispatch(closeSettings());
  };

  return (
    <Modal
      className="flex items-center justify-center"
      open={layout.isSettingsOpen}
      onClose={onModalClose}
    >
      <Box className="bg-gradient-to-b w-1/3 h-3/4 from-purple-900 to-purple-950 text-white p-6 rounded flex flex-col justify-between">
        <h4 className="text-red-700 text-2xl text-center mb-12">
          Quiz Settings
        </h4>
        <div className="flex flex-auto flex-col gap-4">
          <SettingsList settings={settings} response={response} />
        </div>
        <div className="flex items-center justify-end">
          <Button text="Save" type="primary" onClick={onModalClose} />
        </div>
      </Box>
    </Modal>
  );
}
