import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NoteFormProps } from "../types/interfaces";

const categories = ["Робота", "Навчання", "Особисте"];

const NoteSchema = Yup.object().shape({
  title: Yup.string().required("Назва обов'язкова"),
  text: Yup.string().required("Текст обов'язковий"),
  category: Yup.string().oneOf(categories, "Оберіть категорію"),
});

const NoteForm: React.FC<NoteFormProps> = ({ onSave, noteToEdit }) => {
  return (
    <Formik
      initialValues={{
        title: noteToEdit?.title || "",
        text: noteToEdit?.text || "",
        category: noteToEdit?.category || categories[0],
      }}
      validationSchema={NoteSchema}
      onSubmit={(values, { resetForm }) => {
        onSave({
          id: noteToEdit?.id || Date.now(),
          ...values,
          date: new Date().toLocaleDateString(),
        });
        resetForm();
      }}
    >
      {() => (
        <Form className="bg-white p-4 rounded-lg shadow-md">
          <Field
            name="title"
            placeholder="Назва"
            className="border p-2 w-full mb-2"
          />
          <ErrorMessage
            name="title"
            component="div"
            className="text-red-500 text-sm mb-2"
          />

          <Field
            as="textarea"
            name="text"
            placeholder="Текст"
            className="border p-2 w-full mb-2"
          />
          <ErrorMessage
            name="text"
            component="div"
            className="text-red-500 text-sm mb-2"
          />

          <Field
            as="select"
            name="category"
            className="border p-2 w-full mb-2"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </Field>
          <ErrorMessage
            name="category"
            component="div"
            className="text-red-500 text-sm mb-2"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md w-full"
          >
            {noteToEdit ? "Зберегти" : "Додати"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default NoteForm;
