"use client";
import React, { useState } from "react";
import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react"

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};
export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Write your submit logic here
    console.log(formData);
  };
  return (
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <div className="space-y-8">
          <div>
            <div className="space-y-4">
              <div className="flex items-center text-gray-700">
                <Mail className="w-5 h-5 mr-2" />
                <a href="ratneshrt19@gmail.com" className="hover:underline">
                  ratneshrt19@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Follow Me</h2>
            <div className="flex space-x-4 text-gray-700">
              <a
                href="https://github.com/ratneshrt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600"
              >
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/ratneshrt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://twitter.com/ratneshrt9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600"
              >
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
      </div>
    </div>
  );
};
