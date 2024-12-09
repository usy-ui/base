import { FC } from "react";

import { usySpacing } from "@src/styles";

import { CommonCompProps } from "../../@types";
import { Flex } from "../_Layout/Flex";
import { Button } from "../Button";
import { Typography } from "../Typography";

type PureConfirmContentProps = {
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel?: () => void;
};
export type ConfirmContentProps = PureConfirmContentProps & CommonCompProps;

export const ConfirmContent: FC<ConfirmContentProps> = ({
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
}) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      gap={usySpacing.px12}
      widthProps={{ minWidth: "160px" }}
    >
      <Typography size="small" color="white">
        {description}
      </Typography>
      <Flex justifyContent="center" gap={usySpacing.px10}>
        {onConfirm && (
          <Button variant="danger" size="tiny" onClick={onConfirm} noSole>
            {confirmLabel}
          </Button>
        )}
        {onCancel && (
          <Button variant="normal" size="tiny" onClick={onCancel} noSole>
            {cancelLabel}
          </Button>
        )}
      </Flex>
    </Flex>
  );
};
