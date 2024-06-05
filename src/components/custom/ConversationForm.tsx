import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  name: z.string().min(2).max(52).trim(),
  phoneNumber: z.string().optional(),
  company: z.string().optional(),
  email: z.string().email(),
  description: z.string().min(2).max(255).trim(),
  isChecked: z.boolean().default(false).optional(),
})

type Props = {
  title: string
  description: string
  onFormSubmit: (value: any) => void
}

const ConversationForm = ({ title, description, onFormSubmit }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      company: "",
      email: "",
      description: "",
      isChecked: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    onFormSubmit(values)
  }

  return (
    <section className="w-full flex flex-col space-y-6 items-center pt-10">
      <span className="text-[32px] font-serif font-bold">{title}</span>
      <p className="text-center">{description}</p>
      <Form {...form}>
        <form
          autoComplete="off"
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full gap-8 grid grid-cols-2"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="col-span-1 relative bg-[#fbfbfb] border border-[#e7e7e7] text-[#333] text-lg p-4">
                <FormControl>
                  <Input
                    placeholder="Name*"
                    className="bg-[#fbfbfb] text-sm border-0 shadow-none p-0 m-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="absolute -bottom-5 text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="col-span-1 bg-[#fbfbfb] border border-[#e7e7e7] p-4">
                <FormControl>
                  <Input
                    placeholder="Phone"
                    className="bg-[#fbfbfb] text-sm border-0 shadow-none p-0 m-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem className="col-span-1 bg-[#fbfbfb] border border-[#e7e7e7] p-4">
                <FormControl>
                  <Input
                    placeholder="Company"
                    className="bg-[#fbfbfb] text-sm border-0 shadow-none p-0 m-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="col-span-1 relative bg-[#fbfbfb] border border-[#e7e7e7] p-4">
                <FormControl>
                  <Input
                    placeholder="Email*"
                    className="bg-[#fbfbfb] text-sm border-0 shadow-none p-0 m-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="absolute -bottom-5 text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="col-span-2 relative bg-[#fbfbfb] border border-[#e7e7e7] p-4">
                <FormControl>
                  <Textarea
                    placeholder="Tell us about ur project*"
                    className="bg-[#fbfbfb] text-sm border-0 shadow-none p-0 m-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-56 min-h-32 max-h-72"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="absolute -bottom-5 text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isChecked"
            render={({ field }) => (
              <FormItem className="col-span-2 flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    Send me the signed Non-Disclosure Agreement (NDA)
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
          <Button
            className="col-span-2 bg-blue-700 hover:bg-blue-800 text-lg py-1 !rounded-none"
            type="submit"
          >
            Start a conversation
          </Button>
        </form>
      </Form>
    </section>
  )
}

export default ConversationForm
