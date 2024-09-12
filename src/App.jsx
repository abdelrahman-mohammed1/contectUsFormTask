import { Field, Fieldset, Button, Input, Label, Legend, Textarea } from '@headlessui/react'
import clsx from 'clsx'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function App() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      queryType: '',
      message: '',
      consent: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      email: Yup.string().email('Invalid email address').required('Email Address is required'),
      queryType: Yup.string().required('Query Type is required'),
      message: Yup.string().required('Message is required'),
      consent: Yup.boolean().oneOf([true], 'You must consent to be contacted'),
    }),
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <div className='flex h-dvh items-center justify-center'>
      <form className='w-[42%] h-auto  bg-white rounded-lg shadow-lg px-4 py-2'>
        <Fieldset className="space-y-5 px-3 py-6 ">
          <Legend className="text-3xl text-black/80 font-custom font-bold">Contact Us</Legend>
          <div className='flex justify-between gap-2'>
            <Field className='w-[50%]'>
              <Label className="block text-black/90 font-custom text-lg	">First Name <span className='text-[#0c7d69]'>*</span></Label>
              <Input className={clsx(
                'mt-1  w-[100%]  rounded-lg border-[#87a3a6] border-2  py-1.5 px-3 text-sm/6 text-black',
                'focus:outline-none  w-[50%]  data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
              )}
                name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="text-red-600">{formik.errors.firstName}</div>
              ) : null}
            </Field>
            <Field className='w-[50%]'>
              <Label className="block text-black/90 font-custom text-lg	">Last Name <span className='text-[#0c7d69]'>*</span></Label>
              <Input className={clsx(
                'mt-1  w-[100%]   rounded-lg border-[#87a3a6] border-2  py-1.5 px-3 text-sm/6 text-black',
                'focus:outline-none  w-[50%]   data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
              )}

                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="text-red-600">{formik.errors.lastName}</div>
              ) : null}
            </Field>
          </div>
          <Field>
            <Label className="block text-black/90 font-custom text-lg	">Email Address <span className='text-[#0c7d69]'>*</span></Label>
            <Input className={clsx(
              'mt-1 block w-full  rounded-lg border-[#87a3a6] border-2  py-1.5 px-3 text-sm/6 text-black',
              'focus:outline-none   data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
            )}
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-600">{formik.errors.email}</div>
            ) : null}
          </Field>

          <p style={{ marginBottom: '-13px' }} className=" text-black/90 font-custom text-lg 	">Query Type <span className='text-[#0c7d69]'>*</span></p>
          <div className='flex justify-between gap-2 '>
            <div className="flex w-[50%]    items-center ps-4  border-[#87a3a6] border-2   rounded  ">
              <input id="bordered-radio-1" type="radio" name="queryType"
                value="general"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} className="w-4 h-4 text-blue-600 accent-[#0c7d69] bg-gray-100   focus:ring-[#0c7d69] dark:focus:ring-[#0c7d69] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="bordered-radio-1" className="w-full py-4 ms-2   font-medium   text-black/90 font-custom text-lg	 ">General Enquiry</label>
            </div>
            <div className="flex w-[50%]    items-center ps-4  border-[#87a3a6] border-2   rounded  ">
              <input id="bordered-radio-2" type="radio" name="queryType"
                value="support"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} className="w-4 h-4 text-blue-600 accent-[#0c7d69] bg-gray-100  focus:ring-[#0c7d69] dark:focus:ring-[#0c7d69] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="bordered-radio-2" className="w-full  py-4 ms-2   font-medium   text-black/90 font-custom text-lg	 ">Support Request</label>
            </div>
          </div>

          {formik.touched.queryType && formik.errors.queryType ? (
            <div className="text-red-600">{formik.errors.queryType}</div>
          ) : null}

          <Field>
            <Label className="block text-black/90 font-custom text-lg	">Message <span className='text-[#0c7d69]'>*</span></Label>
            <Textarea
              className={clsx(
                'mt-1 mb-6 block w-full resize-none rounded-lg border-[#87a3a6] border-2 bg-white/5 py-1.5 px-3 text-sm/20 text-black  ',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
              )}
              rows={3}
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-600">{formik.errors.message}</div>
            ) : null}
          </Field>






          <div className="flex items-center gap-2  ">
            <input id="link-checkbox" name="consent"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur} type="checkbox" className="w-4 h-4 accent-[#0c7d69] text-#0c7d69 bg-gray-100 border-gray-300 rounded focus:ring-#0c7d69 dark:focus:ring-#0c7d69 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="link-checkbox" className="ms-2 relative top-[1px] text-black/90 font-custom  text-base">I consent to begin contacted by the team <span className='text-[#0c7d69]'>*</span></label>
          </div>
          {formik.touched.consent && formik.errors.consent ? (
            <div className="text-red-600">{formik.errors.consent}</div>
          ) : null}




          <Button
            onClick={formik.handleSubmit}
            className="inline-flex justify-center w-full mt-6  items-center gap-2 rounded-md bg-[#0c7d69] py-2.5 px-5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-[#109980] data-[open]:bg-[#109980] data-[focus]:outline-1 data-[focus]:outline-white">
            Submit
          </Button>

        </Fieldset>
      </form>
    </div>
  )
}


