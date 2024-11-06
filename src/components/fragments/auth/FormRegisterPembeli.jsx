import { useState } from "react";
import TypographyH3 from "@/components/fragments/TypographyH3";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import InputField from "@/components/fragments/InputField";

export default function FormRegisterPembeli() {
  // State untuk data form dan error
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  // Fungsi validasi
  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "Nama Depan wajib diisi";
    if (!formData.lastName.trim())
      newErrors.lastName = "Nama Belakang wajib diisi";
    if (!formData.email.trim()) newErrors.email = "Email wajib diisi";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Format email tidak valid";
    if (!formData.phone.trim()) newErrors.phone = "Nomor Telepon wajib diisi";
    else if (!/^\d{10,15}$/.test(formData.phone))
      newErrors.phone = "Nomor Telepon harus 10-15 angka";
    if (!formData.username.trim()) newErrors.username = "Username wajib diisi";
    if (!formData.password.trim()) newErrors.password = "Password wajib diisi";
    else if (formData.password.length < 6)
      newErrors.password = "Password minimal 6 karakter";
    if (formData.confirmPassword !== formData.password)
      newErrors.confirmPassword = "Konfirmasi Password tidak sesuai";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle perubahan data di input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Fungsi submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Registrasi sukses", formData);
    }
  };

  return (
    <div className="max-w-lg mx-auto pt-8 pb-16">
      <TypographyH3 title={"Daftar Akun"} />
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label="Nama Depan"
          name="firstName"
          placeholder="Nama Depan"
          value={formData.firstName}
          onChange={handleChange}
          error={errors.firstName}
        />
        <InputField
          label="Nama Belakang"
          name="lastName"
          placeholder="Nama Belakang"
          value={formData.lastName}
          onChange={handleChange}
          error={errors.lastName}
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <InputField
          label="No. Telepon"
          name="phone"
          placeholder="Nomor Telepon"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
        />
        <InputField
          label="Username"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          error={errors.username}
        />
        <div className="flex items-center justify-between space-x-4">
          <InputField
            label="Kata Sandi"
            type="password"
            name="password"
            placeholder="Kata Sandi"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />
          <InputField
            label="Konfirmasi Kata Sandi"
            type="password"
            name="confirmPassword"
            placeholder="Konfirmasi Kata Sandi"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
          />
        </div>
        <div className="mx-4 space-y-4">
          <Button type="submit" className="w-full" size="lg">
            Lanjut
          </Button>
          <p className="text-sm text-gray-800 text-center">
            Sudah punya akun?
            <Link
              to={"/login"}
              className="text-red-500 font-medium hover:text-gray-800"
            >
              {" "}
              Masuk
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
