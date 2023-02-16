import React from 'react'
import isslogo from '../assets/iss.png'

export default function Footer_2() {
    return (
        <footer aria-label="Site Footer" class="bg-white">
            <div
                class="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8"
            >
                <div class="sm:flex sm:items-center sm:justify-between">
                <div class="text-yellow-700 flex items-center">
                    <img src={isslogo} class="w-16"/>
                    <p class="pl-4 text-xl">IZTECH SOFTWARE SOCIETY</p>
                </div>

                <ul class="flex justify-start gap-6 mt-8 sm:mt-0 sm:justify-end">
                    <li>
                    <a
                        href="https://www.facebook.com/IYTESS"
                        rel="noreferrer"
                        target="_blank"
                        class="text-gray-700 transition hover:opacity-75"
                    >
                        <span class="sr-only">Facebook</span>

                        <svg
                        class="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        >
                        <path
                            fill-rule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clip-rule="evenodd"
                        />
                        </svg>
                    </a>
                    </li>

                    <li>
                    <a
                        href="https://www.instagram.com/iyte_yazilim/"
                        rel="noreferrer"
                        target="_blank"
                        class="text-gray-700 transition hover:opacity-75"
                    >
                        <span class="sr-only">Instagram</span>

                        <svg
                        class="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        >
                        <path
                            fill-rule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clip-rule="evenodd"
                        />
                        </svg>
                    </a>
                    </li>

                    <li>
                    <a
                        href="/"
                        rel="noreferrer"
                        target="_blank"
                        class="text-gray-700 transition hover:opacity-75"
                    >
                        <span class="sr-only">LinkedIn</span>

                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 448 512" class="w-6 h-6"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
                    </a>
                    </li>

                    <li>
                    <a
                        href="https://github.com/IYTE-Yazilim-Toplulugu"
                        rel="noreferrer"
                        target="_blank"
                        class="text-gray-700 transition hover:opacity-75"
                    >
                        <span class="sr-only">GitHub</span>

                        <svg
                        class="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        >
                        <path
                            fill-rule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clip-rule="evenodd"
                        />
                        </svg>
                    </a>
                    </li>

                    <li>
                    <a
                        href="https://www.youtube.com/@iyteyazilimtoplulugu"
                        rel="noreferrer"
                        target="_blank"
                        class="text-gray-700 transition hover:opacity-75"
                    >
                        <span class="sr-only">Youtube</span>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" aria-hidden="true" class="w-6 h-6"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                    </a>
                    </li>
                </ul>
                </div>

                <div
                class="flex justify-evenly flex-wrap gap-8 pt-8 border-t border-gray-100 lg:pt-16"
                >
                <div>
                    <p class="font-semibold text-gray-900">Hakkımızda</p>

                    <nav aria-label="Footer Navigation - About" class="mt-6">
                    <ul class="space-y-4 text-sm">
                        <li>
                        <a href="#" class="text-gray-700 transition hover:opacity-75">
                            placeholder
                        </a>
                        </li>

                        <li>
                        <a href="#" class="text-gray-700 transition hover:opacity-75">
                            placeholder
                        </a>
                        </li>
                    </ul>
                    </nav>
                </div>

                <div>
                    <p class="font-semibold text-gray-900">Etkinliklerimiz</p>

                    <nav aria-label="Footer Navigation - Events" class="mt-6">
                    <ul class="space-y-4 text-sm">
                        <li>
                        <a href="#" class="text-gray-700 transition hover:opacity-75">
                            placeholder
                        </a>
                        </li>

                        <li>
                        <a href="#" class="text-gray-700 transition hover:opacity-75">
                            placeholder
                        </a>
                        </li>
                    </ul>
                    </nav>
                </div>

                <div>
                    <p class="font-semibold text-gray-900">Yarışmalarımız</p>

                    <nav aria-label="Footer Navigation - Competitions" class="mt-6">
                    <ul class="space-y-4 text-sm">
                        <li>
                        <a href="#" class="text-gray-700 transition hover:opacity-75">
                            placeholder
                        </a>
                        </li>

                        <li>
                        <a href="#" class="text-gray-700 transition hover:opacity-75">
                            placeholder
                        </a>
                        </li>
                    </ul>
                    </nav>
                </div>

                <div>
                    <p class="font-semibold text-gray-900">Paydaşlarımız</p>

                    <nav aria-label="Footer Navigation - Stakeholders" class="mt-6">
                    <ul class="space-y-4 text-sm">
                        <li>
                        <a href="#" class="text-gray-700 transition hover:opacity-75">
                            placeholder
                        </a>
                        </li>

                        <li>
                        <a href="#" class="text-gray-700 transition hover:opacity-75">
                            placeholder
                        </a>
                        </li>
                    </ul>
                    </nav>
                </div>

                <div>
                    <p class="font-semibold text-gray-900">İletişim</p>

                    <nav aria-label="Footer Navigation - Contact" class="mt-6">
                    <ul class="space-y-4 text-sm">
                        <li>
                        <a href="#" class="text-gray-700 transition hover:opacity-75">
                            placeholder
                        </a>
                        </li>

                        <li>
                        <a href="#" class="text-gray-700 transition hover:opacity-75">
                            placeholder
                        </a>
                        </li>
                    </ul>
                    </nav>
                </div>
                </div>

                <p class="text-xs text-gray-500 text-center">
                &copy; 2023 Iztech Software Society. All rights reserved.
                </p>
            </div>
        </footer>
    )
}