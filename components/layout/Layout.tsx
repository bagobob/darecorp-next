import * as React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
return <>
    <Navbar />
    {children}
    <Footer />
</>;
}