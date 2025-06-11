import { InputLabel, InputLabelProps, Stack, StackProps } from "@mui/material";
import {
  Control,
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  RegisterOptions,
  useFormState,
  useWatch,
} from "react-hook-form";
import { FormHelperText } from "@mui/material";
import AppTextEditor from "../AppTextEditor";

const AppFormTextEditor = <T extends FieldValues>({
  label,
  control,
  name,
  rules,
  controlProps,
  labelProps,
  textfieldProps,
  onChangeValueForm,
  ...otherProps
}: AppFormTextEditorProps<T>) => {
  const initValue = useWatch({ control, name });

  const { errors } = useFormState({ control, name });

  return (
    <Stack position="relative" {...otherProps}>
      {label && (
        <InputLabel
          sx={{
            "&": {
              mb: 0.5,
            },
          }}
          required={Boolean(rules?.required)}
          {...labelProps}
        >
          {label}
        </InputLabel>
      )}
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange } }) => (
          <AppTextEditor
            value={initValue}
            onChange={(val: string) => {
              const newValue = val === "<p><br></p>" ? "" : val;
              onChange(newValue);
              onChangeValueForm?.(newValue);
            }}
          />
        )}
      />

      {Boolean(errors?.[name]?.message) && (
        <FormHelperText sx={{ color: "error.main" }}>
          {errors?.[name]?.message as string}
        </FormHelperText>
      )}
    </Stack>
  );
};

type AppFormTextEditorProps<T extends FieldValues> = StackProps & {
  label?: string;
  control: Control<any, object>;
  name: FieldPath<T>;
  errors?: any;
  rules?: RegisterOptions<FieldValues>;
  controlProps?: Omit<ControllerProps, "render" | "name" | "control">;
  labelProps?: InputLabelProps;
  textfieldProps?: any;
  onChangeValueForm?: (event?: any) => void;
};

export default AppFormTextEditor;
