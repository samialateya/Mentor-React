import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import NavbarComponent from './components/NavbarComponent'

function App() {
	const [count, setCount] = useState(0)

	return (
		// <div data-kt-name="metronic" id="kt_app_body" data-kt-app-layout="dark-sidebar" data-kt-app-header-fixed="true"
		// 	data-kt-app-sidebar-enabled="true" data-kt-app-sidebar-fixed="true" data-kt-app-sidebar-hoverable="true"
		// 	data-kt-app-sidebar-push-header="true" data-kt-app-sidebar-push-toolbar="true" data-kt-app-sidebar-push-footer="true"
		// 	data-kt-app-toolbar-enabled="true" className="app-default">
		// 	<div className="d-flex flex-column flex-root app-root" id="kt_app_root">
		// 		<div className="app-page flex-column flex-column-fluid" id="kt_app_page">
		// 			<NavbarComponent />
		// 			<div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
		// 				<div id="kt_app_sidebar" className="app-sidebar flex-column" data-kt-drawer="true" data-kt-drawer-name="app-sidebar"
		// 					data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="225px"
		// 					data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">
							
		// 					<div className="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
								
		// 						<a href="{{ route('admin.homePage') }}">
		// 							<img alt="Logo" src="{{ asset('assets/media/logos/default-dark.svg') }}" className="h-25px app-sidebar-logo-default" />
		// 							<img alt="Logo" src="{{ asset('assets/media/logos/default-small.svg') }}" className="h-20px app-sidebar-logo-minimize" />
		// 						</a>
								
								
		// 						<div id="kt_app_sidebar_toggle"
		// 							className="app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary body-bg h-30px w-30px position-absolute top-50 start-100 translate-middle rotate"
		// 							data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body"
		// 							data-kt-toggle-name="app-sidebar-minimize">
									
		// 							<span className="svg-icon svg-icon-2 rotate-180">
		// 								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		// 									<path opacity="0.5"
		// 										d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z"
		// 										fill="currentColor" />
		// 									<path
		// 										d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z"
		// 										fill="currentColor" />
		// 								</svg>
		// 							</span>
									
		// 						</div>
								
		// 					</div>
							
							
		// 					<div className="app-sidebar-menu overflow-hidden flex-column-fluid">
								
		// 						<div id="kt_app_sidebar_menu_wrapper" className="app-sidebar-wrapper hover-scroll-overlay-y my-5" data-kt-scroll="true"
		// 							data-kt-scroll-activate="true" data-kt-scroll-height="auto"
		// 							data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer"
		// 							data-kt-scroll-wrappers="#kt_app_sidebar_menu" data-kt-scroll-offset="5px" data-kt-scroll-save-state="true">
									
		// 							<div className="menu menu-column menu-rounded menu-sub-indention px-3" id="#kt_app_sidebar_menu" data-kt-menu="true"
		// 								data-kt-menu-expand="false">
										
		// 								<div data-kt-menu-trigger="click" className="menu-item here show menu-accordion">
											
		// 									<span className="menu-link">
		// 										<span className="menu-icon">
													
		// 											<span className="svg-icon svg-icon-2">
		// 												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		// 													<rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor" />
		// 													<rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="currentColor" />
		// 													<rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="currentColor" />
		// 													<rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="currentColor" />
		// 												</svg>
		// 											</span>
													
		// 										</span>
		// 										<span className="menu-title">Dashboards</span>
		// 										<span className="menu-arrow"></span>
		// 									</span>
											
											
		// 									<div className="menu-sub menu-sub-accordion">
												
		// 										<div className="menu-item">
		// 											<a className="menu-link {{ Request::route()->getName() == 'admin.homePage' ? 'active' : '' }}" href="{{ route('admin.homePage') }}">
		// 												<span className="menu-bullet">
		// 													<span className="bullet bullet-dot"></span>
		// 												</span>
		// 												<span className="menu-title">Home</span>
		// 											</a>
		// 										</div>
												
		// 									</div>
											
		// 								</div>
										
										
		// 								<div data-kt-menu-trigger="click" className="menu-item here show menu-accordion">
											
		// 									<span className="menu-link">
		// 										<span className="menu-icon">
													
		// 											<span className="svg-icon svg-icon-2">
		// 												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		// 													<rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor" />
		// 													<rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="currentColor" />
		// 													<rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="currentColor" />
		// 													<rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="currentColor" />
		// 												</svg>
		// 											</span>
													
		// 										</span>
		// 										<span className="menu-title">Settings</span>
		// 										<span className="menu-arrow"></span>
		// 									</span>
											
											
		// 									<div className="menu-sub menu-sub-accordion">
												
		// 										<div className="menu-item">
		// 											<a className="menu-link {{ Request::route()->getName() == 'admin.settings.countriesPage' ? 'active' : '' }}" href="{{ route('admin.settings.countriesPage') }}">
		// 												<span className="menu-bullet">
		// 													<span className="bullet bullet-dot"></span>
		// 												</span>
		// 												<span className="menu-title">Countries</span>
		// 											</a>
		// 										</div>
												
												
		// 										<div className="menu-item">
		// 											<a className="menu-link {{ Request::route()->getName() == 'admin.settings.citiesPage' ? 'active' : '' }}"
		// 												href="{{ route('admin.settings.citiesPage') }}">
		// 												<span className="menu-bullet">
		// 													<span className="bullet bullet-dot"></span>
		// 												</span>
		// 												<span className="menu-title">Cities</span>
		// 											</a>
		// 										</div>
												
												
		// 										<div className="menu-item">
		// 											<a className="menu-link {{ Request::route()->getName() == 'admin.settings.businessTypesPage' ? 'active' : '' }}"
		// 												href="{{ route('admin.settings.businessTypesPage') }}">
		// 												<span className="menu-bullet">
		// 													<span className="bullet bullet-dot"></span>
		// 												</span>
		// 												<span className="menu-title">Business Types</span>
		// 											</a>
		// 										</div>
												
		// 									</div>
											
		// 								</div>
										
										
		// 								<div data-kt-menu-trigger="click" className="menu-item here show menu-accordion">
											
		// 									<span className="menu-link">
		// 										<span className="menu-icon">
													
		// 											<span className="svg-icon svg-icon-2">
		// 												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		// 													<rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor" />
		// 													<rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="currentColor" />
		// 													<rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="currentColor" />
		// 													<rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="currentColor" />
		// 												</svg>
		// 											</span>
													
		// 										</span>
		// 										<span className="menu-title">Card Settings</span>
		// 										<span className="menu-arrow"></span>
		// 									</span>
											
											
		// 									<div className="menu-sub menu-sub-accordion">
												
		// 										<div className="menu-item">
		// 											<a className="menu-link {{ Request::route()->getName() == 'admin.cardSettings.templates.cardTemplatesPage' ? 'active' : '' }}"
		// 												href="{{ route('admin.cardSettings.templates.cardTemplatesPage') }}">
		// 												<span className="menu-bullet">
		// 													<span className="bullet bullet-dot"></span>
		// 												</span>
		// 												<span className="menu-title">Cards Templates</span>
		// 											</a>
		// 										</div>
												
		// 									</div>
											
		// 								</div>
										
		// 							</div>
									
		// 						</div>
								
		// 					</div>
							
		// 				</div>
		// 				<div className="app-main flex-column flex-row-fluid" id="kt_app_main">
		// 					<div className="d-flex flex-column flex-column-fluid">
		// 					Content
		// 					</div>

		// 					<div id="kt_app_footer" className="app-footer">
								
		// 						<div className="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
									
		// 							<div className="text-dark order-2 order-md-1">
		// 								<span className="text-muted fw-semibold me-1">2022©</span>
		// 								<a href="#" target="blank" className="text-gray-800 text-hover-primary">LoyaGrow</a>
		// 							</div>
									
									
		// 							<ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
		// 								<li className="menu-item">
		// 									<a href="#" target="blank" className="menu-link px-2">About</a>
		// 								</li>
		// 								<li className="menu-item">
		// 									<a href="#" target="blank" className="menu-link px-2">Support</a>
		// 								</li>
		// 							</ul>
									
		// 						</div>
								
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
		<></>
	)
}

export default App
