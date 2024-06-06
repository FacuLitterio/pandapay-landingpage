import { numericFormatter } from "react-number-format";

type Props = {
  value: number;
  showSymbol: boolean;
};

const currencyFormatter = (props: Props) => {
  const { value, showSymbol } = props;
  const valueFormatted = value
    ? `${numericFormatter(value.toString(), {
        thousandSeparator: ".",
        decimalScale: 2,
        decimalSeparator: ",",
        fixedDecimalScale: true,
      })}`
    : "-";

  return !showSymbol ? `${valueFormatted}` : `$ ${valueFormatted} ARS`;
};

export default currencyFormatter;
