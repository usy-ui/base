"use client";
import { ChangeEvent, forwardRef, ReactNode, useRef, useState } from "react";

import clsx from "clsx";

import { useNameMemo, useSyncOuterValue } from "@src/hooks";

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
    tags,
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
  const [innerTags, setInnerTags] = useState(tags || []);
  const [inputTag, setInputTag] = useState("");
  useSyncOuterValue<string[]>(setInnerTags, tags || []);
  const { nameMemo } = useNameMemo(name, "tags");
  const inputTagRef = useRef<HTMLInputElement>(null);

  const handleInputTagChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInputTag(target.value);
  };

  const addTag = () => {
    if (disabled) {
      return;
    }

    if (inputTag) {
      const updatedTags = [...new Set([...innerTags, ...inputTag.split(",")])];
      onAdd?.(updatedTags, inputTag);
      setInnerTags(updatedTags);
      inputTagRef.current?.focus();
    }

    setInputTag("");
  };

  const removeTag = (selectedTag: string) => {
    if (disabled) {
      return;
    }

    const updatedTags = [...innerTags].filter(
      (tagItem) => tagItem !== selectedTag
    );
    onRemove?.(updatedTags, selectedTag);
    setInnerTags(updatedTags);
  };

  /**
   * Render
   */

  const renderTags = () => {
    return innerTags.map((tagItem) => {
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
    });
  };

  const renderTagInput = () => {
    return (
      <input
        value={inputTag}
        placeholder={placeholder}
        onChange={handleInputTagChange}
        onBlur={addTag}
        ref={inputTagRef}
        className="tag-input"
        data-testid={`${testId}-tag-input`}
      />
    );
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
        {renderTags()}
        {renderTagInput()}
      </div>
      <InputDescription description={description} testId={testId} />
    </div>
  );
});
