import { setDefault } from "@/redux/slices/settingsSlice";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch } from "react-redux";

export default function SettingsList({ settings, response }) {
  const dispatch = useDispatch();

  const onSettingsChange = ({ target: { name, value } }) => {
    dispatch(setDefault({ name, id: value }));
  };

  return (
    <>
      {settings.map((setting, index) =>
        setting.items ? (
          <FormControl size="small" key={index}>
            <InputLabel>{setting.name}</InputLabel>
            <Select
              name={setting.name}
              label={setting.name}
              value={setting.default}
              onChange={onSettingsChange}
            >
              {setting.items.map((item, key) => (
                <MenuItem value={item.id} key={key}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ) : null
      )}
      {response ? (
        <FormControl size="small">
          <InputLabel>categories</InputLabel>
          <Select
            name="categories"
            label="categories"
            value={
              settings.filter((setting) => setting.name === "categories")[0]
                .default
            }
            onChange={onSettingsChange}
          >
            {response.trivia_categories.map((item, key) => (
              <MenuItem value={item.id} key={key}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : null}
    </>
  );
}
