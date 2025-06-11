import { Stack, Button } from "@mui/material";
import { DateObject } from "react-multi-date-picker";

const OptionsPlugin = ({
  DatePicker,
  onSelectRanger,
  onDateChange,
  onSetSelected,
  selected,
}: {
  DatePicker: any;
  position: string;
  onSelectRanger: (range: DateObject[]) => void;
  onDateChange: (date: Array<Date | null>) => void;
  onSetSelected: (value: string) => void;
  selected: string;
}) => {
  const handleSelect = (type: string) => {
    onSetSelected(type);

    if (type === "custome") {
      const container = document.querySelector(".rmdp-wrapper") as HTMLElement;
      container?.classList.add("custome");
      return;
    }

    const today = new DateObject();
    let start: DateObject;
    let end: DateObject;

    switch (type) {
      case "today":
        start = end = today;
        break;
      case "yesterday":
        start = end = new DateObject().subtract(1, "day");
        break;
      case "thisWeek":
        start = new DateObject().set("day", 0);
        end = new DateObject().set("day", 6);
        break;
      case "thisMonth":
        start = new DateObject().set("day", 1);
        end = new DateObject().add(1, "month").set("day", 0);
        break;
      case "lastMonth":
        start = new DateObject().subtract(1, "month").set("day", 1);
        end = new DateObject().set("day", 0);
        break;
      default:
        return;
    }

    onSelectRanger([start, end]);
    onDateChange([start.toDate(), end.toDate()]);
    DatePicker.closeCalendar();
  };

  return (
    <Stack spacing={1} p={1}>
      {plugins.map(({ label, value }) => (
        <Button
          key={value}
          variant={selected === value ? "contained" : "text"}
          onClick={() => handleSelect(value)}
          sx={{ textAlign: "left", display: "block" }}
        >
          {label}
        </Button>
      ))}
    </Stack>
  );
};

export default OptionsPlugin;

const plugins = [
  { label: "Hôm nay", value: "today" },
  { label: "Hôm qua", value: "yesterday" },
  { label: "Tuần này", value: "thisWeek" },
  { label: "Tháng này", value: "thisMonth" },
  { label: "Tháng trước", value: "lastMonth" },
  { label: "Tùy chọn", value: "custome" },
];
