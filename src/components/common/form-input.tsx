import { FieldValues, Path, UseFormReturn } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '../ui/textarea';

interface FormInputProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: string; // "text" | "email" | "password" | "textarea"
}

export default function FormInput<T extends FieldValues>({ form, name, label, placeholder, type = 'text' }: FormInputProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>{type === 'textarea' ? <Textarea {...field} placeholder={placeholder} autoComplete="off" /> : <Input {...field} type={type} placeholder={placeholder} autoComplete="off" className="resize-none" />}</FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
