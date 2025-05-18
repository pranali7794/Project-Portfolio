// Footer.js
export default function Footer() {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <section className="p-10 bg-emerald-200 flex justify-center">
            <p className="font-bold">
                ©Copyright {year}. All rights reserved.
            </p>
        </section>
    );
}