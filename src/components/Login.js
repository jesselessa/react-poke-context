import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("username", { required: true })}
          type="text"
          id="username"
          name="username"
          maxLength={15}
          placeholder="Username"
        />
        {errors.username && (
          <span>Username must not be more than fifteen characters</span>
        )}
        <input
          {...register("password", { required: true })}
          type="password"
          id="password"
          name="password"
          minLength={6}
          placeholder="Password"
        />
        {errors.password && (
          <span>Password needs to be more than six characters</span>
        )}
        <input type="submit" />
      </form>
    </div>
  );
}
