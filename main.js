
        // CONFIGURATION - UPDATE THESE VALUES
        const CONFIG = {
            // Replace with your actual Paystack Public Key (Test or Live)
            PAYSTACK_PUBLIC_KEY: 'pk_test_your_public_key_here',
            // Replace with your actual WhatsApp number (with country code, no +)
            WHATSAPP_NUMBER: '2348012345678',
            // Business name for WhatsApp messages
            BUSINESS_NAME: 'Okis_Store'
        };

        // Product Data with Real Images and Naira Prices
        const products = [
            { 
                id: 1, 
                name: "Classic Navy Agbada Set", 
                category: "men", 
                price: 85000, 
                original: 95000,
                displayPrice: "₦85,000",
                displayOriginal: "₦95,000",
                image: "https://kimi-web-img.moonshot.cn/img/i.etsystatic.com/d8eaa88eb347f4b841126d17b6789205949e044a.jpg",
                badge: "hot"
            },
            { 
                id: 2, 
                name: "Green Ankara Maxi Dress", 
                category: "women", 
                price: 45000, 
                original: 55000,
                displayPrice: "₦45,000",
                displayOriginal: "₦55,000",
                image: "https://kimi-web-img.moonshot.cn/img/i.etsystatic.com/a910eaee79779cba66f87f95a26d331ca62134a6.jpg",
                badge: "new"
            },
            { 
                id: 3, 
                name: "White Traditional Agbada", 
                category: "men", 
                price: 120000, 
                original: null,
                displayPrice: "₦120,000",
                displayOriginal: null,
                image: "https://kimi-web-img.moonshot.cn/img/i.etsystatic.com/ae51977aaf196ed6f1aa9132dfa71434eb78ccee.jpg",
                badge: "new"
            },
            { 
                id: 4, 
                name: "Kids Traditional Aso-Oke", 
                category: "kids", 
                price: 25000, 
                original: 30000,
                displayPrice: "₦25,000",
                displayOriginal: "₦30,000",
                image: "https://kimi-web-img.moonshot.cn/img/mofeafricanfashion.myshopify.com/e06f647ea0130d839a983a065bda879733607b6f.jpg",
                badge: "sale"
            },
            { 
                id: 5, 
                name: "Gold Luxury Heels & Bag Set", 
                category: "accessories", 
                price: 65000, 
                original: 80000,
                displayPrice: "₦65,000",
                displayOriginal: "₦80,000",
                image: "https://kimi-web-img.moonshot.cn/img/m.media-amazon.com/d893a8424d221554e849819d9a94634640ab89c7.jpg",
                badge: "hot"
            },
            { 
                id: 6, 
                name: "Denim Streetwear Jacket", 
                category: "men", 
                price: 35000, 
                original: null,
                displayPrice: "₦35,000",
                displayOriginal: null,
                image: "https://kimi-web-img.moonshot.cn/img/www.urbanofashion.com/bcf285773c4dd5ce6540c4aee450c354eb6167de.webp",
                badge: "new"
            },
            { 
                id: 7, 
                name: "Beige Corporate Blazer Suit", 
                category: "women", 
                price: 55000, 
                original: 65000,
                displayPrice: "₦55,000",
                displayOriginal: "₦65,000",
                image: "https://kimi-web-img.moonshot.cn/img/i8.amplience.net/22236756649236f7b2c3e5841dc692a1b04a9e26",
                badge: "sale"
            },
            { 
                id: 8, 
                name: "Black & Gold Agbada Set", 
                category: "men", 
                price: 95000, 
                original: null,
                displayPrice: "₦95,000",
                displayOriginal: null,
                image: "https://kimi-web-img.moonshot.cn/img/d13k5xkmdqbhs.cloudfront.net/0cc02eaae0e18cfb080e4553c954fca6965830ca.jpg",
                badge: "hot"
            },
            { 
                id: 9, 
                name: "Kids Casual Hoodie Set", 
                category: "kids", 
                price: 18000, 
                original: 22000,
                displayPrice: "₦18,000",
                displayOriginal: "₦22,000",
                image: "https://kimi-web-img.moonshot.cn/img/m.media-amazon.com/b636c346a95382eda539a49dd0678f28738de93a.jpg",
                badge: "sale"
            },
            { 
                id: 10, 
                name: "Gold Evening Heels & Purse", 
                category: "accessories", 
                price: 48000, 
                original: null,
                displayPrice: "₦48,000",
                displayOriginal: null,
                image: "https://kimi-web-img.moonshot.cn/img/img.freepik.com/d956dc4c694c73fb3c8452faa08919635b3d8102.jpg",
                badge: "new"
            },
            { 
                id: 11, 
                name: "Elegant Champagne Gown", 
                category: "women", 
                price: 75000, 
                original: 90000,
                displayPrice: "₦75,000",
                displayOriginal: "₦90,000",
                image: "https://kimi-web-img.moonshot.cn/img/ae01.alicdn.com/653c43f4c1c6c862bc6d1b8ab9b90136dbcc5a2f.jpg",
                badge: "hot"
            },
            { 
                id: 12, 
                name: "Streetwear Cargo Pants Set", 
                category: "men", 
                price: 28000, 
                original: null,
                displayPrice: "₦28,000",
                displayOriginal: null,
                image: "https://kimi-web-img.moonshot.cn/img/onpointfresh.com/1d74c1a2a43075d3c10674e8e0a50c871fa05982.jpg",
                badge: "new"
            }
        ];

        // Cart State
        let cart = [];

        // Format currency
        function formatCurrency(amount) {
            return '₦' + amount.toLocaleString('en-NG');
        }

        // Render Products
        function renderProducts(productList) {
            const grid = document.getElementById('productsGrid');
            const noResults = document.getElementById('noResults');
            
            grid.innerHTML = '';
            
            if (productList.length === 0) {
                noResults.style.display = 'block';
                return;
            } else {
                noResults.style.display = 'none';
            }

            productList.forEach(product => {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                        <div class="product-badge badge-${product.badge}">${product.badge}</div>
                    </div>
                    <div class="product-info">
                        <div class="product-category">${product.category}</div>
                        <h3 class="product-name">${product.name}</h3>
                        <div class="product-price">
                            ${product.displayPrice}
                            ${product.displayOriginal ? `<span class="original">${product.displayOriginal}</span>` : ''}
                        </div>
                        <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        // Add to Cart
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            
            updateCartUI();
            showToast(`${product.name} added to cart!`);
        }

        // Update Cart UI
        function updateCartUI() {
            const cartCount = document.getElementById('cartCount');
            const cartItems = document.getElementById('cartItems');
            const cartFooter = document.getElementById('cartFooter');
            const cartTotal = document.getElementById('cartTotal');
            
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            // Update count badge
            if (totalItems > 0) {
                cartCount.textContent = totalItems;
                cartCount.style.display = 'flex';
            } else {
                cartCount.style.display = 'none';
            }
            
            // Render cart items
            if (cart.length === 0) {
                cartItems.innerHTML = `
                    <div class="cart-empty">
                        <div class="cart-empty-icon">🛒</div>
                        <h3>Your cart is empty</h3>
                        <p>Add some items to get started!</p>
                    </div>
                `;
                cartFooter.style.display = 'none';
            } else {
                cartItems.innerHTML = cart.map(item => `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}">
                        <div class="cart-item-details">
                            <div class="cart-item-name">${item.name}</div>
                            <div class="cart-item-price">${formatCurrency(item.price * item.quantity)}</div>
                            <div class="cart-item-qty">
                                <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                                <span>${item.quantity}</span>
                                <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                            </div>
                        </div>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                `).join('');
                cartFooter.style.display = 'block';
                cartTotal.textContent = formatCurrency(totalAmount);
            }
        }

        // Update Quantity
        function updateQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                } else {
                    updateCartUI();
                }
            }
        }

        // Remove from Cart
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartUI();
            showToast('Item removed from cart');
        }

        // Toggle Cart Modal
        function toggleCart() {
            const modal = document.getElementById('cartModal');
            modal.classList.toggle('active');
            document.body.style.overflow = modal.classList.contains('active') ? 'hidden' : '';
        }

          // Auth Functions
        function openAuthModal() {
            document.getElementById('authModal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeAuthModal() {
            document.getElementById('authModal').classList.remove('active');
            document.body.style.overflow = '';
        }

        function switchAuthTab(tab) {
            const loginTab = document.getElementById('loginTab');
            const registerTab = document.getElementById('registerTab');
            const loginForm = document.getElementById('loginForm');
            const registerForm = document.getElementById('registerForm');
            const footerText = document.getElementById('authFooterText');
            const footerLink = document.getElementById('authFooterLink');

            if (tab === 'login') {
                loginTab.classList.add('active');
                registerTab.classList.remove('active');
                loginForm.classList.add('active');
                registerForm.classList.remove('active');
                footerText.textContent = "Don't have an account? ";
                footerLink.textContent = "Register";
                footerLink.onclick = () => switchAuthTab('register');
            } else {
                loginTab.classList.remove('active');
                registerTab.classList.add('active');
                loginForm.classList.remove('active');
                registerForm.classList.add('active');
                footerText.textContent = "Already have an account? ";
                footerLink.textContent = "Login";
                footerLink.onclick = () => switchAuthTab('login');
            }
        }

        function handleLogin(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            // Simulate login (in real app, this would call an API)
            currentUser = {
                name: email.split('@')[0],
                email: email,
                avatar: 'https://kimi-web-img.moonshot.cn/img/cdn-icons-png.flaticon.com/b8736c390b437ff7c6fefaddee1e0fc614fb63d1.png'
            };
            
            updateAuthUI();
            closeAuthModal();
            showToast('Welcome back, ' + currentUser.name + '!');
            e.target.reset();
        }

        function handleRegister(e) {
            e.preventDefault();
            const name = document.getElementById('regName').value;
            const email = document.getElementById('regEmail').value;
            const password = document.getElementById('regPassword').value;
            const confirmPassword = document.getElementById('regConfirmPassword').value;
            
            if (password !== confirmPassword) {
                showToast('Passwords do not match!');
                return;
            }
            
            // Simulate registration
            currentUser = {
                name: name,
                email: email,
                avatar: 'https://kimi-web-img.moonshot.cn/img/cdn-icons-png.flaticon.com/b8736c390b437ff7c6fefaddee1e0fc614fb63d1.png'
            };
            
            updateAuthUI();
            closeAuthModal();
            showToast('Account created successfully! Welcome, ' + name + '!');
            e.target.reset();
        }

        function updateAuthUI() {
            const loginBtn = document.getElementById('loginBtn');
            const userProfile = document.getElementById('userProfile');
            const userAvatar = document.getElementById('userAvatar');
            
            if (currentUser) {
                loginBtn.style.display = 'none';
                userProfile.classList.add('active');
                userProfile.style.display = 'block';
            } else {
                loginBtn.style.display = 'flex';
                userProfile.classList.remove('active');
                userProfile.style.display = 'none';
            }
        }

        function logout() {
            currentUser = null;
            updateAuthUI();
            showToast('Logged out successfully!');
        }

        function toggleUserDropdown() {
            const dropdown = document.getElementById('userDropdown');
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        }


        function closeCartOutside(event) {
            if (event.target === event.currentTarget) {
                toggleCart();
            }
        }

        // Payment Modal
        function openPaymentModal() {
            if (cart.length === 0) {
                showToast('Your cart is empty!');
                return;
            }
            const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            document.getElementById('payAmount').textContent = totalAmount.toLocaleString('en-NG');
            document.getElementById('paymentModal').classList.add('active');
        }

        function closePaymentModal() {
            document.getElementById('paymentModal').classList.remove('active');
        }

        // Process Paystack Payment
        function processPayment() {
            const name = document.getElementById('payName').value;
            const email = document.getElementById('payEmail').value;
            const phone = document.getElementById('payPhone').value;
            
            if (!name || !email || !phone) {
                showToast('Please fill in all fields');
                return;
            }
            
            const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const reference = 'OKIS_' + Date.now();
            
            // Initialize Paystack Payment
            const popup = new PaystackPop();
            popup.newTransaction({
                key: CONFIG.PAYSTACK_PUBLIC_KEY,
                email: email,
                amount: totalAmount * 100, // Convert to kobo
                currency: 'NGN',
                ref: reference,
                metadata: {
                    custom_fields: [
                        {
                            display_name: "Customer Name",
                            variable_name: "customer_name",
                            value: name
                        },
                        {
                            display_name: "Phone Number",
                            variable_name: "phone_number",
                            value: phone
                        },
                        {
                            display_name: "Order Items",
                            variable_name: "order_items",
                            value: cart.map(item => `${item.name} (x${item.quantity})`).join(', ')
                        }
                    ]
                },
                onSuccess: (transaction) => {
                    closePaymentModal();
                    toggleCart();
                    document.getElementById('successModal').classList.add('active');
                    
                    // Clear cart after successful payment
                    cart = [];
                    updateCartUI();
                    
                    // Send WhatsApp confirmation
                    sendWhatsAppConfirmation(name, transaction.reference, totalAmount);
                },
                onCancel: () => {
                    showToast('Payment cancelled');
                }
            });
        }

        // Send Order via WhatsApp
        function sendOrderViaWhatsApp() {
            if (cart.length === 0) {
                showToast('Your cart is empty!');
                return;
            }
            
            const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            let message = `*New Order from Okis_Store*%0A%0A`;
            message += `*Items:*%0A`;
            cart.forEach(item => {
                message += `• ${item.name} (Qty: ${item.quantity}) - ${formatCurrency(item.price * item.quantity)}%0A`;
            });
            message += `%0A*Total: ${formatCurrency(totalAmount)}*%0A`;
            message += `%0APlease confirm availability and payment details.`;
            
            const whatsappUrl = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${message}`;
            window.open(whatsappUrl, '_blank');
            
            toggleCart();
        }

        // Send WhatsApp Confirmation after Paystack payment
        function sendWhatsAppConfirmation(name, reference, amount) {
            let message = `*Payment Received - Okis_Store*%0A%0A`;
            message += `*Customer:* ${name}%0A`;
            message += `*Reference:* ${reference}%0A`;
            message += `*Amount:* ${formatCurrency(amount)}%0A`;
            message += `*Status:* PAID ✅%0A%0A`;
            message += `Please prepare the order for delivery.`;
            
            const whatsappUrl = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${message}`;
            // Open in background
            const link = document.createElement('a');
            link.href = whatsappUrl;
            link.target = '_blank';
            link.click();
        }

        function closeSuccessModal() {
            document.getElementById('successModal').classList.remove('active');
        }

        // Search Functionality
        function searchProducts() {
            const searchTerm = document.getElementById('searchBar').value.toLowerCase();
            const filtered = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm) || 
                product.category.toLowerCase().includes(searchTerm)
            );
            renderProducts(filtered);
            
            if (searchTerm.length > 0) {
                document.getElementById('collection').scrollIntoView({ behavior: 'smooth' });
            }
        }

        // Category Filter
        function filterCategory(category) {
            if (category === 'all') {
                renderProducts(products);
            } else {
                const filtered = products.filter(product => product.category === category);
                renderProducts(filtered);
            }
            document.querySelector('.dropdown').classList.remove('active');
            document.getElementById('collection').scrollIntoView({ behavior: 'smooth' });
        }

        // Toast Notification
        function showToast(message) {
            const toast = document.createElement('div');
            toast.style.cssText = `
                position: fixed;
                bottom: 100px;
                right: 30px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 1.2rem 2rem;
                border-radius: 12px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                z-index: 10000;
                font-weight: 600;
                animation: slideIn 0.3s ease;
                font-family: 'Poppins', sans-serif;
            `;
            toast.textContent = message;
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        // Mobile Menu
        function toggleMenu() {
            document.getElementById('navLinks').classList.toggle('active');
        }

        function closeMenu() {
            document.getElementById('navLinks').classList.remove('active');
        }

        function toggleDropdown(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                document.querySelector('.dropdown').classList.toggle('active');
            }
        }

        // Contact Form
        function handleSubmit(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            
            const toast = document.createElement('div');
            toast.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                color: white;
                padding: 2rem 3rem;
                border-radius: 20px;
                box-shadow: 0 20px 50px rgba(0,0,0,0.2);
                z-index: 10000;
                font-weight: 600;
                text-align: center;
            `;
            toast.innerHTML = `
                <div style="font-size: 3rem; margin-bottom: 1rem;">✉️</div>
                <div>Thank you, ${name}!</div>
                <div style="font-size: 0.9rem; margin-top: 0.5rem; opacity: 0.9;">Your message has been sent successfully.</div>
            `;
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transition = 'opacity 0.5s';
                setTimeout(() => toast.remove(), 500);
            }, 3000);
            
            e.target.reset();
        }

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Add animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100px); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100px); opacity: 0; }
            }
        `;
        document.head.appendChild(style);

        // Intersection Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Initial Render
        renderProducts(products);
        updateCartUI();

        // Observe product cards
        setTimeout(() => {
            document.querySelectorAll('.product-card').forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = `all 0.6s ease ${index * 0.1}s`;
                observer.observe(card);
            });
        }, 100);
    