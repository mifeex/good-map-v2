import { FormEvent } from "react";

type TParsedForm = {
  lat?: string;
  lan?: string;
  params?: string;
};

/**
 * Returns parsed form object
 * @param event: FormEvent<HTMLFormElement> from React
 */

const formDataParser = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  let result: TParsedForm = {};

  for (const [key, value] of data) {
    result = { ...result, [key]: value };
  }

  return result;
};

export default formDataParser;
