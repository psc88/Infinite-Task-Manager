import { FormEvent, useState } from "react";

export const useHeaderListTask = (
  onAddTask: (text: string) => Promise<void>
) => {
  const [newTaskText, setNewTaskText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await onAddTask(newTaskText);
      setNewTaskText("");
    } finally {
      setIsSubmitting(false);
    }
  };
  return {
    newTaskText,
    setNewTaskText,
    isSubmitting,
    handleSubmit,
  };
};
