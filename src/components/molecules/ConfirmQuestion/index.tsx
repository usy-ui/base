import { FC } from "react";

import { usySpacing } from "@src/styles";

import { CommonCompProps } from "../../../@types";
import { Button } from "../../atoms/Button";
import { Flex } from "../../atoms/LayoutFlex";
import { Typography } from "../../atoms/Typography";

/**
 * Types
 */

type PureConfirmQuestionProps = {
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel?: () => void;
};
export type ConfirmQuestionProps = PureConfirmQuestionProps & CommonCompProps;

export const ConfirmQuestion: FC<ConfirmQuestionProps> = ({
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
