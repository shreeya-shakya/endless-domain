import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import {
  Alert,
  Button,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Row,
} from 'reactstrap';
import styles from 'styles/Footer.module.scss';
import * as apiService from '../../core/services/api.service';

const Footer = () => {
  const SUBSCRIBE_URL = 'subscribe';
  const [email, setEmail] = useState('');
  const [spinner, setSpinner] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState<string | null>(null);

  const subscribeEmail = async ($event: FormEvent) => {
    setSpinner(true);
    $event.preventDefault();
    const EVENT_TARGET = $event.target as any;
    // Regular expression to check if string is email
    const regexExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regexExp.test(EVENT_TARGET.subscribeEmail.value)) {
      const formData = {
        email: EVENT_TARGET.subscribeEmail.value,
      };
      try {
        const response = await apiService.postApi(
          `/${SUBSCRIBE_URL}`,
          formData
        );
        if (response) {
          setShowSuccessMessage(true);
          setSpinner(false);
          setTimeout(() => {
            setEmail('');
            setShowSuccessMessage(false);
          }, 5000);
        }
      } catch (error) {
        console.log(error);
        setSpinner(false);
        setShowErrorMessage('Something went wrong!');
      }
    } else {
      setSpinner(false);
      setShowErrorMessage('Invalid Email!');
    }
  };

  return (
    <>
      <footer className={styles.footer_bg}>
        <div className='container'>
          <Row>
            <Col lg={4} className='position-relative'>
              <Link href='/' className={styles.footer__logo}>
                <Image
                  src='/logo-invert.png'
                  alt='Footer Logo'
                  width={200}
                  height={100}
                />
              </Link>
              <div className={`${styles.social_media}`}>
                <Link
                  href='https://www.facebook.com/endlessdomains'
                  target='_blank'
                >
                  <svg
                    stroke='white'
                    fill='white'
                    strokeWidth='0'
                    viewBox='0 0 16 16'
                    height='24px'
                    width='24px'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z'></path>
                  </svg>
                </Link>
                <Link href='https://twitter.com/endlessdomains' target='_blank'>
                  <svg
                    stroke='white'
                    fill='white'
                    strokeWidth='0'
                    viewBox='0 0 1024 1024'
                    height='28px'
                    width='28px'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z'></path>
                  </svg>
                </Link>
                {/* <Image
                  src="/icons/linkedIn.svg"
                  height={24}
                  width={24}
                  alt="LinkedIn Icon"
                /> */}
                <Link
                  href='https://www.instagram.com/endlessdomains/'
                  target='_blank'
                >
                  <svg
                    stroke='white'
                    fill='white'
                    strokeWidth='0'
                    viewBox='0 0 1024 1024'
                    height='28px'
                    width='28px'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z'></path>
                  </svg>
                </Link>
              </div>
              <div className={styles.footer__copyright}>
                ©2022. All Rights Reserved.
              </div>
            </Col>
            <Col lg={8}>
              <h1 className={styles.footer__title__newsletter}>
                Subscribe to our newsletter
              </h1>
              <p className={styles.footer__subtitle__newsletter}>
                Want to get all the cool updates about the ecosystem along with
                information regarding
                <br /> available domain names? Subscribe to our newsletter, and
                always stay informed about the
                <br /> developments!
              </p>

              <div>
                {/* <form onSubmit={subscribeEmail}> */}
                <Form onSubmit={subscribeEmail}>
                  <FormGroup>
                    <Input
                      id='email'
                      name='subscribeEmail'
                      placeholder='Email Address'
                      type='text'
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setShowErrorMessage(null);
                      }}
                      value={email}
                      valid={showSuccessMessage}
                      invalid={showErrorMessage !== null}
                    />
                    <FormFeedback
                      valid={showSuccessMessage}
                      invalid={showErrorMessage}
                    >
                      {showSuccessMessage
                        ? ' Thank you for subscribing!'
                        : showErrorMessage}
                    </FormFeedback>
                  </FormGroup>
                  <Button
                    outline
                    className={`${styles.subscribe_button}`}
                    type='submit'
                  >
                    Subscribe{' '}
                    {spinner && (
                      <svg
                        className={'spinner mb-2 ms-2'}
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        version='1.1'
                        viewBox='0 0 16 16'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M16 8c-0.020-1.045-0.247-2.086-0.665-3.038-0.417-0.953-1.023-1.817-1.766-2.53s-1.624-1.278-2.578-1.651c-0.953-0.374-1.978-0.552-2.991-0.531-1.013 0.020-2.021 0.24-2.943 0.646-0.923 0.405-1.758 0.992-2.449 1.712s-1.237 1.574-1.597 2.497c-0.361 0.923-0.533 1.914-0.512 2.895 0.020 0.981 0.234 1.955 0.627 2.847 0.392 0.892 0.961 1.7 1.658 2.368s1.523 1.195 2.416 1.543c0.892 0.348 1.851 0.514 2.799 0.493 0.949-0.020 1.89-0.227 2.751-0.608 0.862-0.379 1.642-0.929 2.287-1.604s1.154-1.472 1.488-2.335c0.204-0.523 0.342-1.069 0.415-1.622 0.019 0.001 0.039 0.002 0.059 0.002 0.552 0 1-0.448 1-1 0-0.028-0.001-0.056-0.004-0.083h0.004zM14.411 10.655c-0.367 0.831-0.898 1.584-1.55 2.206s-1.422 1.112-2.254 1.434c-0.832 0.323-1.723 0.476-2.608 0.454-0.884-0.020-1.759-0.215-2.56-0.57-0.801-0.354-1.526-0.867-2.125-1.495s-1.071-1.371-1.38-2.173c-0.31-0.801-0.457-1.66-0.435-2.512s0.208-1.694 0.551-2.464c0.342-0.77 0.836-1.468 1.441-2.044s1.321-1.029 2.092-1.326c0.771-0.298 1.596-0.438 2.416-0.416s1.629 0.202 2.368 0.532c0.74 0.329 1.41 0.805 1.963 1.387s0.988 1.27 1.272 2.011c0.285 0.74 0.418 1.532 0.397 2.32h0.004c-0.002 0.027-0.004 0.055-0.004 0.083 0 0.516 0.39 0.94 0.892 0.994-0.097 0.544-0.258 1.075-0.481 1.578z'></path>
                      </svg>
                    )}
                  </Button>
                </Form>

                {/* </form> */}
              </div>
            </Col>
          </Row>
        </div>
      </footer>
    </>
  );
};

export default Footer;
