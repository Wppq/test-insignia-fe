export function Footer() {
    return (
        <footer className="text-gray-200 p-6">
            <div className="flex justify-center mb-4">
                <a href="#" className="mx-4 hover:text-gray-400">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="mx-4 hover:text-gray-400">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="mx-4 hover:text-gray-400">
                    <i className="fab fa-facebook-f"></i>
                </a>
            </div>
            <div className="text-center mb-4">
                <a href="#" className="mx-3 hover:text-gray-400">About</a>
                <span className="mx-3">/</span>
                <a href="#" className="mx-3 hover:text-gray-400">For Business</a>
                <span className="mx-3">/</span>
                <a href="#" className="mx-3 hover:text-gray-400">Suggestions</a>
                <span className="mx-3">/</span>
                <a href="#" className="mx-3 hover:text-gray-400">Help & FAQs</a>
                <span className="mx-3">/</span>
                <a href="#" className="mx-3 hover:text-gray-400">Contacts</a>
                <span className="mx-3">/</span>
                <a href="#" className="mx-3 hover:text-gray-400">Pricing</a>
            </div>
            <div className="text-center mb-2 text-sm">
                © Copyright 2013 <span className="font-semibold">companyname inc.</span>
            </div>
            <div className="text-center text-sm">
                <a href="#" className="mx-3 hover:text-gray-400">Privacy</a>
                <span className="mx-3">/</span>
                <a href="#" className="mx-3 hover:text-gray-400">Terms</a>
            </div>
        </footer>
    )
}