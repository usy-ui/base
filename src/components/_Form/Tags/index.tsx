"use client";
import { ChangeEvent, forwardRef, ReactNode, useRef, useState } from "react";

import clsx from "clsx";

import { useNameMemo } from "@src/hooks";

import {
  CommonCompProps,
  FieldLabelProps,
  FormFieldProps,
  WidthProps,
} from "../../../@types";
import { CloseCircleSolidIcon } from "../../Icon";
import { FieldLabel } from "../FieldLabel";
import { InputDescription } from "../Input/components/InputDescription";

type PureTagsProps = {
  tags?: string[];
  placeholder?: string;
  description?: ReactNode;
  onAdd?: (tags: string[], addedTag: string) => void;
  onRemove?: (tags: string[], removedTag: string) => void;
};

export type TagsProps = PureTagsProps &
  FieldLabelProps &
  Pick<FormFieldProps<string[]>, "disabled" | "hasError"> &
  WidthProps &
  CommonCompProps;

export const Tags = forwardRef<HTMLDivElement, TagsProps>(function Tags(
  {
    tags: initTags,
    placeholder = "New tag...",
    description,
    onAdd,
    onRemove,
    label,
    hasAsterisk,
    disabled = false,
    hasError = false,
    widthProps,
    className,
    name = "tags",
    testId = name,
  },
  ref
) {
  const [tags, setTags] = useState(initTags || []);
  const [inputTag, setInputTag] = useState("");
  const inputTagRef = useRef<HTMLInputElement>(null);
  const { nameMemo } = useNameMemo(name, "tags");

  const handleInputTagChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInputTag(target.value);
  };

  const addTag = () => {
    if (disabled) {
      return;
    }

    if (inputTag) {
      const updatedTags = [...new Set([...tags, ...inputTag.split(",")])];
      onAdd?.(updatedTags, inputTag);
      setTags(updatedTags);
      inputTagRef.current?.focus();
    }

    setInputTag("");
  };

  const removeTag = (selectedTag: string) => {
    if (disabled) {
      return;
    }

    const updatedTags = [...tags].filter((tagItem) => tagItem !== selectedTag);
    onRemove?.(updatedTags, selectedTag);
    setTags(updatedTags);
  };

  return (
    <div
      ref={ref}
      className={clsx(
        "usy-tags-container",
        {
          disabled: Boolean(disabled),
        },
        className
      )}
      data-testid={testId}
    >
      {label && (
        <FieldLabel
          name={nameMemo}
          label={label}
          hasAsterisk={hasAsterisk}
          testId={`${testId}-title`}
        />
      )}
      <div
        className={clsx(
          "tags-container",
          {
            "has-error": hasError,
          },
          className
        )}
        style={{ ...(widthProps || { width: "100%" }) }}
      >
        {tags.map((tagItem) => {
          return (
            <span
              key={tagItem}
              className="tag-item"
              data-testid={`${testId}-tag-item`}
            >
              {tagItem}
              <CloseCircleSolidIcon onClick={() => removeTag(tagItem)} />
            </span>
          );
        })}
        <input
          value={inputTag}
          placeholder={placeholder}
          onChange={handleInputTagChange}
          onBlur={addTag}
          ref={inputTagRef}
          className="tag-input"
          data-testid={`${testId}-tag-input`}
        />
      </div>
      <InputDescription description={description} testId={testId} />
    </div>
  );
});
