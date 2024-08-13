import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { postContactUs } from "@/helpers/koru";
import { toast } from "react-toastify";
import { Form, Field } from "react-final-form";
import { string } from "yup";

const FormCom = () => {
  const requiredName = async (value: string) => {
    try {
      await string().required("Silakan masukkan nama anda").validate(value);
    } catch (err: any) {
      return err?.errors;
    }
  };
  const requiredEmail = async (value: string) => {
    try {
      await string()
        .required("Silakan masukkan email anda")
        .email("Silakan masukan format email yang benar")
        .validate(value);
    } catch (err: any) {
      return err?.errors;
    }
  };
  const requiredPesan = async (value: string) => {
    try {
      await string()
        .required("Silakan masukkan pesan yang diinginkan")
        .validate(value);
    } catch (err: any) {
      return err?.errors;
    }
  };
  const handleSubmit = async (values: any, form: any) => {
    try {
      await postContactUs(values);
      form.restart();
      toast.success("Pesan sudah berhasil dikirim !!!");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      subscription={{ submitting: true, pristine: true }}
      // validate={(values: any) => {
      //   console.log(values);
      //   return values;
      // }}
      render={({ handleSubmit, form, submitting }) => (
        <form
          className="w-full flex flex-col space-y-4 gap-1.5"
          onSubmit={(values: any) => handleSubmit(values)}
          id="form-pesan"
        >
          <Field name="name" validate={requiredName}>
            {({ input, meta }) => (
              <span className="flex flex-col space-y-2">
                <Label htmlFor="name" className="flex space-x-1">
                  <p className="text-red-600">*</p>
                  <p>Nama</p>
                </Label>
                <Input
                  {...input}
                  type="text"
                  id="name"
                  placeholder="Nama"
                  className="rounded-xl"
                  name="name"
                />
                {meta.touched && meta.error && (
                  <span className="text-red-500">{meta.error}</span>
                )}
              </span>
            )}
          </Field>

          <Field name="email" validate={requiredEmail}>
            {({ input, meta }) => (
              <span className="flex flex-col space-y-2">
                <Label htmlFor="email" className="flex space-x-1">
                  <p className="text-red-600">*</p>
                  <p>Email</p>
                </Label>
                <Input
                  {...input}
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="rounded-xl"
                  name="email"
                />
                {meta.touched && meta.error && (
                  <span className="text-red-500">{meta.error}</span>
                )}
              </span>
            )}
          </Field>

          <Field name="message" validate={requiredPesan}>
            {({ input, meta }) => (
              <span className="flex flex-col space-y-2">
                <Label htmlFor="message" className="flex space-x-1">
                  <p className="text-red-600">*</p>
                  <p>Pesan</p>
                </Label>
                <Textarea
                  {...input}
                  placeholder="tulis pesan yang ingin ditanyakan atau disampaikan"
                  className="resize-none rounded-xl"
                  name="message"
                />
                {meta.touched && meta.error && (
                  <span className="text-red-500">{meta.error}</span>
                )}
              </span>
            )}
          </Field>

          <button
            type="submit"
            className="bg-brownkertas text-white rounded-xl py-2"
            disabled={submitting}
          >
            Submit
          </button>
        </form>
      )}
    />
  );
};

export default FormCom;
