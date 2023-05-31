import { Icon } from '@iconify/react';
import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Div from '../Div';
import PageHeading from '../PageHeading';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import ContactWidget from '../Widget/ContactWidget';
import ContactDynamic from './contactDynamic';

import { useDispatch, useSelector } from 'react-redux';
import { submitForm, resetForm } from './Store'; // Update this import path as per your project structure

export default function ContactPage() {
  pageTitle('Contact Us');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const isSubmitted = useSelector((state) => state.isSubmitted);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      projectType: '',
      mobile: '',
      message: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().matches(/^[A-Za-z\s]+$/, 'Invalid name format').required('Full Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      projectType: Yup.string().matches(/^[A-Za-z\s]+$/, 'Invalid project type format').required('Project Type is required'),
      mobile: Yup.string().matches(/^[0-9]+$/, 'Invalid mobile number format').required('Mobile is required'),
      message: Yup.string(),
    }),
    onSubmit: (values, { resetForm }) => {
      // Handle form submission
      console.log(values);
      dispatch(submitForm());
      resetForm();
      setTimeout(() => {
        dispatch(resetForm());
      }, 1000);
    },
  });

  return (
    <>
      <PageHeading
        title="Contact Us"
        bgSrc="/images/contact_hero_bg.jpeg"
        pageLinkText="Contact"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title="Do you have a project <br/>in your mind? Connect with us."
              subtitle="Get in Touch"
            />
            <Spacing lg="55" md="30" />
            <ContactWidget withIcon />
            <Spacing lg="0" md="50" />
          </Div>
          <Div className="col-lg-6">
            <form onSubmit={formik.handleSubmit} className="row">
              <Div className="col-sm-6">
                <label className="cs-primary_color">Full Name*</label>
                <input
                  type="text"
                  className="cs-form_field"
                  name="fullName"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.fullName && formik.errors.fullName && (
                  <div className="error_name">{formik.errors.fullName}</div>
                )}
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Email*</label>
                <input
                  type="email"
                  className="cs-form_field"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="error_name">{formik.errors.email}</div>
                )}
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Project Type*</label>
                <input
                  type="text"
                  className="cs-form_field"
                  name="projectType"
                  value={formik.values.projectType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.projectType && formik.errors.projectType && (
                  <div className="error_name">{formik.errors.projectType}</div>
                )}
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-6">
                <label className="cs-primary_color">Mobile*</label>
                <input
                  type="tel"
                  className="cs-form_field"
                  name="mobile"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.mobile && formik.errors.mobile && (
                  <div className="error_name">{formik.errors.mobile}</div>
                )}
                <Spacing lg="20" md="20" />
              </Div>
              <Div className="col-sm-12">
                <label className="cs-primary_color">Message</label>
                <textarea
                  cols="30"
                  rows="7"
                  className="cs-form_field"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></textarea>
                {formik.touched.message && formik.errors.message && (
                  <div className="error_name">{formik.errors.message}</div>
                )}
                <Spacing lg="25" md="25" />
              </Div>
              <Div className="col-sm-12">
                <button className="cs-btn cs-style1" type="submit">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
              {isSubmitted && (
                <div className="success_message">Form submitted successfully!</div>
              )}
            </form>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="cs-google_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd"
          allowFullScreen
          title="Google Map"
        />
      </Div>
      <Spacing lg="50" md="40" />
    </>
  );
}

