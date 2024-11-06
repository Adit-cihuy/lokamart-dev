import { useState } from "react";
import TypographyH3 from "@/components/fragments/TypographyH3";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import InputField from "@/components/fragments/InputField";

export default function FormLogin() {
  // State untuk simpan input dan error
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  // Fungsi validasi input
  const validateForm = () => {
    const formErrors = {};
    if (!formData.username.trim()) formErrors.username = "Username tidak boleh kosong";
    if (!formData.password.trim()) formErrors.password = "Password tidak boleh kosong";
    if (formData.password && formData.password.length < 6)
      formErrors.password = "Password minimal 6 karakter";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Fungsi submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proses login di sini
      console.log("Login sukses!");
    }
  };

  // Handle perubahan data input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="w-full space-y-4">
      <TypographyH3 title="Masuk ke Akun-mu" className="text-center" />
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <InputField
          label="Username"
          name="username"
          placeholder="Nama Pengguna"
          value={formData.username}
          onChange={handleChange}
          error={errors.username}
        />
        <InputField
          label="Kata Sandi"
          type="password"
          name="password"
          placeholder="Kata Sandi"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />
        <p className="text-sm text-gray-800">Lupa Kata Sandi?</p>
        <Button type="submit" className="w-full">
          Masuk
        </Button>
        <p className="text-sm text-gray-800 text-center">
          Tidak punya akun?
          <Link to="/register" className="text-red-500 font-medium hover:text-gray-800">
            Daftar
          </Link>
        </p>
      </form>
    </div>
  );
}
