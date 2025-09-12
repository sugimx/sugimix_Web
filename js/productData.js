// Product data for Sug Surveying Equipment & Instruments
const productData = [
    {
        "brand": "HI TARGET",
        "model": "V300",
        "product_name": "HI TARGET V300 - Versatile GNSS RTK Receiver",
        "category": "RTK Receiver",
        "description": "The Hi-Target V300 GNSS RTK Receiver is a compact, long-endurance solution with a starlight HD camera and AR measurement technology, delivering immersive live-view stakeout even in low-light. Its next-gen IMU with auto initialization ensures fast, tilt-compensated accuracy, while the 1408-channel full-constellation engine (supporting BeiDou-3 and advanced RTK decoding) provides centimeter-level precision. Seamless 360° AR stakeout between rover and controller boosts efficiency, and the rugged iHand55 with Hi-Survey software offers intelligent, user-friendly operation for all surveying and engineering needs.",
        "features": [
            "1408 channels for full-constellation GNSS tracking",
            "Professional star night vision HD camera with real scene lofting",
            "Next-generation IMU with automatic initialization and tilt compensation",
            "1cm image lofting accuracy for precise measurements",
            "Dual eSIM support with 3 years of cellular data included",
            "Built-in 16GB ROM with automatic static data cycle storage",
            "Linux operating system with advanced RTK decoding",
            "Multiple communication options: 4G, Wi-Fi, Bluetooth, full protocol radio",
            "IP68 dustproof and waterproof protection",
            "Operating temperature range: -45°C to +75°C",
            "Cloud services with device management and collaborative work",
            "NFC flash link and WebUI interaction capabilities",
            "Intelligent voice and function self-test features",
            "Resistant to 2-meter high measuring pole drops"
        ],
        "specifications": {
            "GNSS Configuration": {
                "Channels": "1408",
                "Satellite Tracking": {
                    "BDS": "B1I, B2I, B3I, B1C, B2a, B2b",
                    "GPS": "L1C/A, L1C, L2P(Y), L2C, L5",
                    "GLONASS": "L1, L2",
                    "GALILEO": "E1, E5a, E5b, E6*",
                    "QZSS": "L1, L2, L5, L6*",
                    "IRNSS": "L5*",
                    "SBAS": "L1, L2, L5",
                    "L-BAND": "*"
                }
            },
            "Output Format": "ASCII: NMEA-0183, Binary code",
            "Positioning Output Frequency": "1Hz~20Hz",
            "Static Data Format": "GNS, Rinex dual-format static data",
            "Difference Scheme": "RTCM2.X, RTCM3.X",
            "Network Mode": "VRS, FKP, MAC; Supports the NTRIP protocol",
            "System Configuration": {
                "Operating System": "Linux Operating system",
                "Data Storage": "Built-in 16GB ROM, support static data automatic cycle storage"
            },
            "Accuracy and Reliability": {
                "RTK Positioning Accuracy": {
                    "Plane": "±(8+1×10^-6D)mm (D is the distance between measured points)",
                    "Height": "±(15+1×10^-6D)mm (D is the distance between measured points)"
                },
                "Static Positioning Accuracy": {
                    "Plane": "±(2.5+0.5×10^-6D)mm (D is the distance between measured points)",
                    "Height": "±(5+0.5×10^-6D)mm (D is the distance between measured points)"
                },
                "Difference Accuracy of Satellite Station": {
                    "Plane Accuracy": "10cm",
                    "Height Accuracy": "20cm"
                },
                "DGPS Positioning Accuracy": {
                    "Plane Accuracy": "±0.25m+1ppm",
                    "Elevation Accuracy": "±0.50m+1ppm"
                },
                "SBAS Positioning Accuracy": "0.5m",
                "Inclination Measurement Accuracy": "8mm+0.7mm/° tilt",
                "Image Lofting Accuracy": "1cm",
                "Initialization Time": "<10 seconds",
                "Initialization Reliability": ">99.99%",
                "Breakpoint Continuation": "RTK measurements are still available during differential signal outages"
            },
            "IMU": "Next-gen IMU with auto initialization",
            "Tilt Compensation": "Yes, fast and automatic",
            "Camera": {
                "Function": "Professional star night vision HD camera, large viewing Angle, support real scene lofting"
            },
            "AR Measurement": "Supported, 360° live-view AR stakeout",
            "Controller": "iHand55",
            "Software": "Hi-Survey",
            "User Interface": {
                "Button": "Single button",
                "LED": "Satellite, signal, power"
            },
            "Advanced Functions": "NFC, WebUI, USB firmware upgrade",
            "Communication Unit": {
                "I/O Port": "USB Type-C port, SMA port",
                "Cellular Mobility": {
                    "eSIM Card": "Support host and manual double eSIM, double network double standby, including 3 years of traffic, boot is high precision",
                    "Built-in 4G Network Communication": "TDD-LTE, FDD-LTE, WCDMA, TD-SCDMA, EDGE, GPRS, GSM"
                },
                "WiFi Communication": "802.11a/b/g/n access point and client mode to provide WiFi hotspot services",
                "Bluetooth Communication": "Bluetooth® 2.4GHz, BT5.2",
                "Built-in Full Protocol Radio": {
                    "Transceiver Integration": "Base station transmission and mobile station reception",
                    "Power": "0.5W/1W/2W adjustable",
                    "Frequency Band": "410MHz to 470MHz",
                    "Protocol": "HI-TARGET, TRIMTALK450S, TRIMMARKⅢ, TRANSEOT, SATEL",
                    "Number of Channels": "116 (16 of which are configurable)"
                }
            },
            "Sensor": {
                "Electronic Bubbles": "Intelligent alignment",
                "Tilt Measurement": "Built-in a new generation of high-precision inertial navigation, automatic startup initialization, automatic attitude compensation"
            },
            "User Interface": {
                "Button": "Single button",
                "LED Prompt Light": "Satellite light, signal light, power light"
            },
            "Functional Application": {
                "Advanced Functions": "NFC flash link, WebUI interaction, USB flash drive firmware upgrade",
                "Intelligent Application": "Intelligent voice, function self-test",
                "Remote Service": "Message push, online upgrade, remote control",
                "Cloud Services": "Device management, location services, collaborative work, data analytics"
            },
            "Physical Characteristics": {
                "Host Battery": "High capacity lithium battery 6800mAh, working time is better than 16 hours",
                "External Power Supply": "USB 15W charging",
                "Size": "Φ130mm×68mm"
            },
            "Environmental Characteristics": {
                "Dustproof and Waterproof": "IP68",
                "Anti-fall": "Resist the natural fall of 2 meters high measuring pole",
                "Relative Humidity": "100% non-condensing",
                "Operating Temperature": "-45℃~+75℃",
                "Storage Temperature": "-55℃~+85℃"
            }
        },
        "price": "₹ 4,51,230 + GST",
        "images": [
            "images/product_images/GNSS/Hi TARGET/V300 GNSS RTK/Hi Target V 300.jpg",
            "images/product_images/GNSS/Hi TARGET/V300 GNSS RTK/hi target v 300 big.jpg"
        ],
        "alt": "HI TARGET V300 GNSS RTK Receiver"
    }
    ,
    {
        "brand": "HI TARGET",
        "model": "V200",
        "product_name": "HI TARGET V200",
        "category": "RTK Receiver",
        "description": "The Hi-Target V200 GNSS RTK Receiver is a compact, high-performance solution designed to deliver accuracy, reliability, and efficiency in the field. Powered by an advanced RTK engine and a new-generation 9-axis IMU, it ensures up to 25% improved performance even in challenging environments. Its high-performance patch antenna enhances low-elevation satellite tracking while maintaining strong connections with higher ones. With Hi-Fix technology, the V200 guarantees continuous connectivity and precise results even under extreme conditions. Built with an ultralight yet durable EPP case and a portable centering rod, it combines ruggedness with convenience, making it a trusted choice for productive and efficient fieldwork.",
        "features": [
            "Compact and portable GNSS RTK receiver",
            "1408 channels supporting full GNSS constellation",
            "High-precision 9-axis IMU with automatic tilt compensation",
            "Centimeter-level accuracy with fast RTK initialization",
            "Built-in high-gain patch antenna for enhanced low-elevation signal tracking",
            "Hi-Fix technology for continuous data under signal loss",
            "Rugged EPP carrying case and portable centering rod",
            "Smart voice, smart base station, and intelligent functions",
            "WebUI, OTG, NFC, and U-disk firmware upgrade support",
            "Cloud-based services and remote support capabilities"
        ],
        "specifications": {
            "GNSS Configuration": {
                "Number of channels": "1408",
                "BDS": "B1, B2, B3",
                "GPS": "L1, L2, L5",
                "GLONASS": "L1, L2",
                "GALILEO": "E1, E5a, E5b",
                "SBAS": "Support",
                "QZSS": "Support"
            },
            "Output Format": "ASCII: NMEA-0183, binary code",
            "Positioning Output Frequency": "1Hz~20Hz",
            "Static Data Format": "GNS, Rinex dual format static data",
            "Difference Format": "CMR, RTCM2.X, RTCM3.0, RTCM3.2",
            "Network Mode": "VRS, FKP, MAC; support NTRIP protocol",
            "System Configuration": {
                "Operating System": "Linux operating system",
                "Start Time": "3 seconds",
                "Data Storage": "Built-in 8GB ROM, supports automatic storage of static data"
            },
            "Accuracy and Reliability": {
                "RTK Positioning Accuracy": {
                    "Plane": "±(8+1×10^-6D) mm (D is the distance between the measured points)",
                    "Elevation": "±(15+1×10^-6D) mm (D is the distance between the measured points)"
                },
                "Static Positioning Accuracy": {
                    "Plane": "±(2.5+0.5×10^-6D) mm (D is the distance between the measured points)",
                    "Elevation": "±(5+0.5×10^-6D) mm (D is the distance between the measured points)"
                },
                "DGPS Positioning Accuracy": {
                    "Plane Accuracy": "±0.25m+1ppm",
                    "Elevation Accuracy": "±0.50m+1ppm"
                },
                "SBAS Positioning Accuracy": "0.5m",
                "Initialization Time": "<10 seconds",
                "Initialization Reliability": ">99.99%"
            },
            "Communication Unit": {
                "I/O Port": "USB Type-C interface, SMA interface",
                "Built-in 4G Network Communication": "Built-in eSIM4 card, including 3 years Internet access fee, you can connect to the Internet after power on",
                "WiFi Communication": "802.11 a/b/g/n access point and client mode, can provide WiFi hotspot service",
                "Bluetooth Communication": "Bluetooth® 4.2/2.1+EDR, 2.4GHz",
                "Built-in Radio": {
                    "Built-in Transceiver Station": "Power: 0.5W/1W/2W adjustable",
                    "Frequency Band": "410MHz~470MHz",
                    "Protocol": "HI-TARGET, TRIMTALK450S, TRIMMARKⅢ, TRANSEOT",
                    "Number of Channels": "116 (16 of which can be configured)"
                }
            },
            "Sensor": {
                "Electronic Bubble": "Realize smart alignment",
                "Tilt Measurement": "Built-in high-precision inertial navigation, automatic attitude compensation, 8mm+0.7mm/°tilt (accuracy within 30°<2.5cm)"
            },
            "User Interface": {
                "Button": "A power button",
                "LED Indicator Light": "Satellite lights, signal lights, power lights",
                "WEB UI": "Built-in WEB page to realize receiver setting and status check"
            },
            "Function Application": {
                "Advanced Features": "OTG function, NFC IGRS, WebUI interaction, U disk firmware upgrade",
                "Smart Application": "Smart base station, smart voice, function self-check, smart CORS",
                "Remote Service": "News push, online upgrade, remote control",
                "Cloud Service": "Equipment management, location services, collaborative operations, data analysis"
            },
            "Physical Characteristics": {
                "Host Battery": "Built-in high-capacity lithium battery 6800mAh/7.4V, network mobile station working time is more than 10 hours",
                "External Power Supply": "Support USB port charging and external power supply",
                "Size": "Φ132mmx67mm",
                "Weight": "≤0.82kg",
                "Power Consumption": "4.2W",
                "Material": "The shell is made of magnesium alloy material"
            },
            "Environmental Characteristics": {
                "Dustproof and Waterproof": "IP68",
                "Anti-fall": "Resistance to natural drop of 2m high measuring rod",
                "Relative Humidity": "100% non-condensing",
                "Operating Temperature": "-30℃~+70℃",
                "Storage Temperature": "-40℃~+80℃"
            }
        },
        "price": "₹ 3,46,504 + GST",
        "images": [
            "images/product_images/GNSS/Hi TARGET/V300 GNSS RTK/hi target v 300 big.jpg",
            "images/product_images/GNSS/Hi TARGET/V300 GNSS RTK/Hi Target V 300.jpg"
        ],
        "alt": "HI TARGET V200 GNSS RTK Receiver"
    }
    ,
    {
        "brand": "HI TARGET",
        "model": "H32",
        "product_name": "HI TARGET H32",
        "category": "RTK Receiver",
        "description": "The Hi-Target H32 delivers precise positioning with advanced satellite tracking, efficient workflows, and a rugged design, making it ideal for diverse surveying applications.",
        "features": [
          "Smart, Easy, Reliable GNSS RTK Receiver",
          "Advanced satellite tracking",
          "Efficient workflows",
          "Rugged design for surveying applications"
        ],
        "specifications": {
          "GNSS Characteristics": {
            "Channels": "220 channels",
            "Supported Systems": [
              "GPS: L1C/A, L1C, L2C, L2E, L5",
              "GLONASS: L1C/A, L1P, L2C/A, L2P",
              "SBAS: WAAS, EGNOS, MSAS",
              "Galileo: E1, E5A, E5B (test)",
              "Beidou: B1, B2"
            ],
            "Advanced Multipath Mitigation": true,
            "Low Noise Carrier Phase Measurement": true
          },
          "Performance Specifications": {
            "Real Time Kinematics (RTK)": {
              "Horizontal": "8mm+0.5ppm RMS",
              "Vertical": "15mm+0.5ppm RMS",
              "Initialization time": "typically <8s",
              "Initialization reliability": "typically >99.9%"
            },
            "Post Processing Static": {
              "Horizontal": "2.5mm+0.5ppm RMS",
              "Vertical": "5mm+0.5ppm RMS"
            },
            "Post Processing Kinematics (PPK)": {
              "Horizontal": "1cm+1ppm RMS",
              "Vertical": "2.5cm+1ppm RMS"
            }
          },
          "Communications": {
            "RS232 serial port": "x2",
            "Blue Tooth, NFC": "x1",
            "Integrated GSM/GPRS or 3G modem": "x1",
            "TNC antenna connector": "x1",
            "DC power input (8pins & 5 pins)": "x2",
            "USB standard 2.0 port": "x1",
            "Hi-target internal UHF radio (Standard)": "450-470 MHz, 116 channels, 1w, 2w, 5w adjustable, work distance: 5-10KM",
            "Hi-target external UHF radio (Standard)": "460MHz, 116 channels. 5w, 10w, 20w, 30w adjustable, work distance: 8-20km",
            "Pacific Crest internal/external UHF radio (optional)": "internal: 403-473MHz, 3-10KM; External: 390-430MHz or 430-470MHz, 8-20KM (work range)",
            "Protocols": [
              "RTCM2.1, RTCM2.3, RTCM3.0",
              "CMR, CMR+ input and output",
              "NMEA0183 outputs",
              "RINEX and ZHD outputs for GNSS raw data"
            ]
          },
          "Data Storage": {
            "Internal memory": "1GB internal memory + 8GB internal Micro storage card",
            "Record formats": "GNS and Rinex format simultaneously"
          },
          "Physical": {
            "Dimension (W×H)": "182mm × 98 mm (7.17 × 3.86 in)",
            "Weight": "1.25Kg with battery (2.76lb)",
            "Working Temperature": "-45°C to +65°C (-49°F to 149°F)",
            "Storage Temperature": "-55°C to +85°C (-67°F to 185°F)",
            "Humidity": "100% condensation",
            "Dustproof": "IP67",
            "Waterproof": "Protected from temporary immersion to depth of 1 meter, floats",
            "Shock": "Survives a 3-meter drop on to concrete"
          },
          "Electrical": {
            "Typical power consumption": "less than 3.5 W",
            "Battery capacity": "7.4v, 5000 mAh",
            "Operating times on internal battery": "Up to 15 hours typical",
            "External power input": "6-28 V DC"
          }
        },
        "price": "₹ 2,96,697 + GST",
        "images": [
            "images/product_images/GNSS/Hi TARGET/H32 GNSS RTK/HI TARGET H32.png",
            "images/product_images/GNSS/Hi TARGET/H32 GNSS RTK/HI TARGET H32 FRONT.png"
        ],
        "alt": "HI TARGET H32 GNSS RTK Receiver"
    }
,      
    {
        "brand": "HI TARGET",
        "model": "A10",
        "product_name": "HI TARGET A10",
        "category": "RTK Receiver",
        "description": "The Hi-Target A10 combines high-precision GNSS technology with a portable design, ensuring reliable performance for fast and flexible fieldwork. This compact dual-frequency GNSS RTK receiver is built for high-precision surveying with 220 channels supporting GPS, GLONASS, Galileo, BeiDou, and SBAS, delivering reliable centimeter-level accuracy with fast initialization under 8 seconds.",
        "features": [
            "Compact dual-frequency GNSS RTK receiver",
            "220 channels for comprehensive satellite tracking",
            "Supports GPS, GLONASS, Galileo, BeiDou, and SBAS",
            "Centimeter-level accuracy with fast initialization under 8 seconds",
            "Integrated UHF, GSM/3G modem, Bluetooth, and NFC connectivity",
            "Multiple communication ports for seamless field connectivity",
            "Rugged IP67 protection design",
            "Withstands 3-meter drops and extreme temperatures",
            "5000mAh battery for up to 15 hours of operation",
            "Versatile solution for land surveying, GIS, and engineering applications",
            "Smart Precision, Simplified operation"
        ],
        "specifications": {
            "GNSS Characteristics": {
                "Channels": "220 channels",
                "Supported Systems": [
                    "GPS: L1C/A, L1C, L2C, L2E, L5",
                    "GLONASS: L1C/A, L1P, L2C/A, L2P",
                    "SBAS: WAAS, EGNOS, MSAS",
                    "Galileo: E1, E5A, E5B (test)",
                    "Beidou: B1, B2"
                ],
                "Advanced Multipath Mitigation": true,
                "Low Noise Carrier Phase Measurement": true
            },
            "Performance Specifications": {
                "Real Time Kinematics (RTK)": {
                    "Horizontal": "8mm+0.5ppm RMS",
                    "Vertical": "15mm+0.5ppm RMS",
                    "Initialization time": "typically <8s",
                    "Initialization reliability": "typically >99.9%"
                },
                "Post Processing Static": {
                    "Horizontal": "2.5mm+0.5ppm RMS",
                    "Vertical": "5mm+0.5ppm RMS"
                },
                "Post Processing Kinematics (PPK)": {
                    "Horizontal": "1cm+1ppm RMS",
                    "Vertical": "2.5cm+1ppm RMS"
                }
            },
            "Communications": {
                "RS232 serial port": "x2",
                "Blue Tooth, NFC": "x1",
                "Integrated GSM/GPRS or 3G modem": "x1",
                "TNC antenna connector": "x1",
                "DC power input (8pins & 5 pins)": "x2",
                "USB standard 2.0 port": "x1",
                "Hi-target internal UHF radio (Standard)": "450-470 MHz, 116 channels, 1w, 2w, 5w adjustable, work distance: 5-10KM",
                "Hi-target external UHF radio (Standard)": "460MHz, 116 channels. 5w, 10w, 20w, 30w adjustable, work distance: 8-20km",
                "Pacific Crest internal/external UHF radio (optional)": "internal: 403-473MHz, 3-10KM; External: 390-430MHz or 430-470MHz, 8-20KM (work range)",
                "Protocols": [
                    "RTCM2.1, RTCM2.3, RTCM3.0",
                    "CMR, CMR+ input and output",
                    "NMEA0183 outputs",
                    "RINEX and ZHD outputs for GNSS raw data"
                ]
            },
            "Data Storage": {
                "Internal memory": "1GB internal memory + 8GB internal Micro storage card",
                "Record formats": "GNS and Rinex format simultaneously"
            },
            "Physical": {
                "Dimension (W×H)": "182mm × 98 mm (7.17 × 3.86 in)",
                "Weight": "1.25Kg with battery (2.76lb)",
                "Working Temperature": "-45°C to +65°C (-49°F to 149°F)",
                "Storage Temperature": "-55°C to +85°C (-67°F to 185°F)",
                "Humidity": "100% condensation",
                "Dustproof": "IP67",
                "Waterproof": "Protected from temporary immersion to depth of 1 meter, floats",
                "Shock": "Survives a 3-meter drop on to concrete"
            },
            "Electrical": {
                "Typical power consumption": "less than 3.5 W",
                "Battery capacity": "7.4v, 5000 mAh",
                "Operating times on internal battery": "Up to 15 hours typical",
                "External power input": "6-28 V DC"
            }
        },
        "price": "₹ 2,96,697 + GST",
        "lastSale": "₹ 2,96,697",
        "images": [
            "images/product_images/GNSS/Hi TARGET/A10 GNSS RTK/HI TARGET A10.jpg",
            "images/product_images/GNSS/Hi TARGET/A10 GNSS RTK/HI TARGET A10 ONE.jpg",
            "images/product_images/GNSS/Hi TARGET/A10 GNSS RTK/HI TARGET A10 SINGLE.jpg"
        ],
        "likes": 89,
        "alt": "HI TARGET A10 GNSS RTK Receiver"
    },
    {
        "brand": "SOUTH",
        "model": "ALPS1",
        "product_name": "SOUTH ALPS1",
        "category": "RTK Receiver",
        "description": "The South ALPS1 is an advanced GNSS RTK receiver that integrates laser measurement and visual positioning to deliver high-performance surveying. Equipped with a long-range laser for capturing points without physical access, dual cameras for target recognition and 3D modeling, and IMU tilt compensation for accuracy on uneven terrain, it ensures efficient data collection in any environment. Designed for construction, forestry, and UAV mapping, it streamlines complex tasks with AR-assisted stakeout and seamless CAD integration, making surveying faster, safer, and more precise.",
        "features": [
            "1698 channels for comprehensive GNSS tracking",
            "Advanced laser measurement with 30m working range",
            "Dual camera system: 8MP video shooting and 2MP AR stakeout",
            "Built-in IMU with 8mm+0.7mm/°tilt accuracy",
            "AR-assisted stakeout for enhanced precision",
            "Long-range UHF communication up to 15km",
            "Multiple positioning modes: RTK, PPK, Static, Rapid Static",
            "16GB SSD internal storage with automatic cycling",
            "IP68 waterproof and dustproof protection",
            "Extended battery life: 25h static, 20h rover mode",
            "Web UI for remote monitoring and configuration",
            "Multi-language voice guidance support",
            "Cloud platform integration for remote management",
            "Secondary development package available"
        ],
        "specifications": {
            "GNSS Features": {
                "Channels": "1698",
                "Satellite Systems": {
                    "GPS": "L1C, L1C/A, L2C, L2P(Y), L5",
                    "GLONASS": "G1, G2, G3",
                    "BDS": "B1I, B2I, B3I, B1C, B2a, B2b",
                    "GALILEO": "E1, E5a, E5b, E6, AltBOC*",
                    "SBAS": "L1*, L5*",
                    "QZSS": "L1, L2C, L5*",
                    "MSS L-Band": "Reserve"
                }
            },
            "Positioning Performance": {
                "Output Rate": "1Hz~20Hz",
                "Initialization Time": "< 10s",
                "Initialization Reliability": "> 99.99%",
                "Code Differential GNSS": {
                    "Horizontal": "0.25 m + 1 ppm RMS",
                    "Vertical": "0.50 m + 1 ppm RMS"
                },
                "GNSS Static": {
                    "Horizontal": "2.5 mm + 0.5 ppm RMS",
                    "Vertical": "3.5 mm + 0.5 ppm RMS"
                },
                "Static (Long Observation)": {
                    "Horizontal": "2.5 mm + 0.1 ppm RMS",
                    "Vertical": "3 mm + 0.4 ppm RMS"
                },
                "Rapid Static": {
                    "Horizontal": "2.5 mm + 0.5 ppm RMS",
                    "Vertical": "5 mm + 0.5 ppm RMS"
                },
                "PPK": {
                    "Horizontal": "3 mm + 1 ppm RMS",
                    "Vertical": "5 mm + 1 ppm RMS"
                },
                "RTK(UHF)": {
                    "Horizontal": "8 mm + 1 ppm RMS",
                    "Vertical": "15 mm + 1 ppm RMS"
                },
                "RTK(NTRIP)": {
                    "Horizontal": "8 mm + 0.5 ppm RMS",
                    "Vertical": "15 mm + 0.5 ppm RMS"
                },
                "SBAS Positioning": "Typically <5m 3DRMS",
                "RTK Initialization Time": "2~8s"
            },
            "IMU Accuracy": "8mm+0.7 mm/°tilt",
            "IMU Tilt Angle": "Optimal accuracy within 60°",
            "Hardware Performance": {
                "Dimension": "134mm(φ)×79mm(H)",
                "Weight": "860g (battery included)",
                "Material": "Magnesium aluminum alloy shell",
                "Operating Temperature": "-45℃~+75℃",
                "Storage Temperature": "-55℃~+85℃",
                "Humidity": "100% Non-condensing",
                "Waterproof/Dustproof": "IP68 standard",
                "Shock/Vibration": "Withstand 2 meters pole drop onto the cement ground naturally"
            },
            "Power Supply": {
                "Input": "6-28V DC, overvoltage protection",
                "Battery": "Inbuilt 7.4v 6800mAh rechargeable Lithium-ion battery",
                "Battery Life": {
                    "Static": "25h",
                    "Rover Mode": "20h (optimal condition)"
                }
            },
            "Communications": {
                "I/O Port": "5-PIN LEMO interface (external power port + RS232)",
                "Type-C Interface": "charge+OTG+Ethernet",
                "UHF Antenna Interface": "Available",
                "Internal UHF": {
                    "Power": "2W Radio Tx&Rx",
                    "Frequency Range": "410-470MHz",
                    "Protocol": "Farlink, Trimtalk, SOUTH",
                    "Range": "Typically 8-10km with Farlink protocol, (12-15km in optimal condition)"
                },
                "Bluetooth": "Bluetooth 5.0, Bluetooth 3.0/4.2 standard, Bluetooth 2.1 + EDR",
                "NFC Communication": "Support",
                "Modem": "802.11 b/g/n standard"
            },
            "Data Storage/Transmission": {
                "Storage": "16GB SSD internal storage",
                "Features": [
                    "Support automatic cycling storage",
                    "Support external USB storage (OTG)",
                    "The customizable sample interval is up to 20Hz"
                ],
                "Data Transmission": [
                    "Plug and play mode of USB data transmission",
                    "Supports FTP/HTTP data download"
                ],
                "Data Format": {
                    "Static": "STH, Rinex2.01, Rinex3.02, etc.",
                    "Differential": "RTCM 2.1, RTCM 2.3, RTCM 3.0, RTCM 3.1, RTCM 3.2",
                    "GPS Output": "NMEA 0183, PJK plane coordinate, Binary code",
                    "Support": "VRS, FKP, MAC, fully support NTRIP protocol"
                }
            },
            "Sensors": {
                "IMU": "Built-in IMU module, calibration-free, 60°",
                "Camera": {
                    "Video Shooting": "8MP (can be used in AR stakeout)",
                    "AR Stakeout": "2MP"
                },
                "Laser": "3R green laser, 30m working range",
                "Electronic Bubble": "Controller software can display electronic bubble, checking leveling status of the carbon pole in real-time",
                "Thermometer": "Built-in thermometer sensor, adopting intelligent temperature control technology, monitoring and adjusting the receiver temperature"
            },
            "User Interaction": {
                "Operating System": "Linux",
                "Buttons": "Dual buttons",
                "Indicators": "Satellites, data and power indicators",
                "Display": "1.14'', 135*240",
                "Web Interaction": "With access to Web UI via WiFi or USB connection, users can monitor the receiver status and change the configurations",
                "Voice Guidance": "Chinese/English/Korean/Spanish/Portuguese/Russian/Turkish/French/Italian/Arabic"
            },
            "Secondary Development": "Provides secondary development package, and opens the OpenSIC observation data format and interaction interface definition",
            "Cloud Service": "The powerful cloud platform provides online services like remote management, firmware updates, online registers, etc."
        },
        "price": "₹ 4,28,145 + GST",
        "images": [
            "images/product_images/GNSS/SOUTH/ALPS1 GNSS RTK/south Alps1.jpg",
            "images/product_images/GNSS/SOUTH/ALPS1 GNSS RTK/south alps1 all.jpg",
            "images/product_images/GNSS/SOUTH/ALPS1 GNSS RTK/south alps1 group.jpg"
        ],
        "alt": "SOUTH ALPS1 Advanced GNSS RTK Receiver with Laser & Visual Positioning"
    },
    {
        "brand": "SOUTH",
        "model": "INNO4",
        "product_name": "SOUTH INNO4",
        "category": "RTK Receiver",
        "description": "The South INNO4 is a compact, lightweight GNSS RTK receiver built for modern surveyors, combining portability, durability, and advanced positioning technology. Weighing under 540g, it is easy to carry by hand or with a foldable telescopic pole, while its dual-camera AR stakeout function provides live-view guidance for fast and accurate stakeout. Powered by a 1698-channel GNSS board, it delivers superior accuracy and performance even in challenging environments, with support for PPK, Fast Static, and Prism Plus solutions. Featuring an IP68-rated design, enhanced IMU stability, and flexible base setup with external radio options, the INNO4 ensures reliable results in the field. With built-in Wi-Fi, Bluetooth, 4G, and 5G connectivity, it offers seamless data transmission, making it a versatile tool for professional surveying.",
        "features": [
            "Compact and lightweight design under 540g",
            "1698-channel GNSS board for superior accuracy",
            "Dual-camera AR stakeout function with live-view guidance",
            "Enhanced IMU stability for reliable positioning",
            "Support for PPK, Fast Static, and Prism Plus solutions",
            "IP68-rated design for durability in harsh environments",
            "Flexible base setup with external radio options",
            "Built-in Wi-Fi, Bluetooth, 4G, and 5G connectivity",
            "Seamless data transmission capabilities",
            "Easy to carry by hand or with foldable telescopic pole",
            "Fast and accurate stakeout operations",
            "Professional surveying tool for modern surveyors",
            "Long battery life up to 25 hours in rover mode",
            "Magnesium aluminum alloy shell construction"
        ],
        "specifications": {
            "GNSS Features": {
                "Channels": "1698",
                "MSS L-Band": "Reserve"
            },
            "Positioning Performance": {
                "Output Rate": "1Hz-20Hz",
                "Initialization Time": "<10s",
                "Initialization Reliability": ">99.99%",
                "Code Differential Positioning": {
                    "Horizontal": "0.25m+1 ppm RMS",
                    "Vertical": "0.50 m+1 ppm RMS"
                },
                "GNSS Static": {
                    "Horizontal": "2.5mm+0.5 ppm RMS",
                    "Vertical": "3.5mm+0.5 ppm RMS"
                },
                "Static (Long Observation)": {
                    "Horizontal": "2.5 mm+0.1 ppm RMS",
                    "Vertical": "3mm+0.4 ppm RMS"
                },
                "Rapid Static": {
                    "Horizontal": "2.5mm+0.5 ppm RMS",
                    "Vertical": "5mm+0.5ppm RMS"
                },
                "PPK": {
                    "Horizontal": "3mm+1 ppm RMS",
                    "Vertical": "5mm+1 ppm RMS"
                },
                "RTK(UHF)": {
                    "Horizontal": "8mm+1 ppm RMS",
                    "Vertical": "15 mm+1 ppm RMS"
                },
                "RTK(NTRIP)": {
                    "Horizontal": "8 mm+0.5 ppm RMS",
                    "Vertical": "15mm+0.5 ppm RMS"
                },
                "SBAS Positioning": "Typically <5m 3DRMS",
                "RTK Initialization Time": "2~8s"
            },
            "IMU": {
                "Tilt Angle": "0°-60°",
                "Enhanced Stability": "Yes"
            },
            "Hardware Performance": {
                "Dimension": "105mm(φ)*58mm(H)",
                "Weight": "540g (battery included)",
                "Material": "Magnesium aluminum alloy shell",
                "Operating Temperature": "-45℃~+75℃",
                "Storage Temperature": "-55℃~+85℃",
                "Humidity": "100% Non-condensing",
                "Waterproof/Dustproof": "IP68 standard, protected from long time immersion to depth of 1m, fully protected against blowing dust",
                "Shock/Vibration": "Withstand 2 meters pole drop onto the cement ground naturally"
            },
            "Power Supply": {
                "Input": "6-28V DC, overvoltage protection",
                "Battery": "Inbuilt 5000mAh rechargeable Lithium-ion battery",
                "Battery Life": "25h (rover mode)"
            },
            "Connectivity": {
                "Built-in Communication": "Wi-Fi, Bluetooth, 4G, and 5G",
                "Data Transmission": "Seamless data transmission capabilities",
                "External Radio Options": "Flexible base setup with external radio options"
            },
            "Camera System": {
                "Dual-Camera AR Stakeout": "Live-view guidance for fast and accurate stakeout"
            },
            "Applications": {
                "Surveying Solutions": "PPK, Fast Static, and Prism Plus solutions",
                "Professional Use": "Versatile tool for professional surveying"
            }
        },
        "price": "₹ 2,50,897 + GST",
        "images": [
            "images/product_images/GNSS/SOUTH/INN04 GNSS RTK/South inn04.jpg",
            "images/product_images/GNSS/SOUTH/INN04 GNSS RTK/south inn04 all.jpg",
            "images/product_images/GNSS/SOUTH/INN04 GNSS RTK/south inn04 more.jpg"
        ],
        "alt": "SOUTH INNO4 Compact GNSS RTK Receiver with Dual-Camera AR Stakeout"
    },
    {
        "brand": "SOUTH",
        "model": "INNO5",
        "product_name": "SOUTH INNO5",
        "category": "RTK Receiver",
        "description": "The South INNO5 is a rugged, high-performance GNSS RTK receiver module designed for surveying and precision positioning. Supporting multi-constellation (GPS, GLONASS, GALILEO, and more) and multi-frequency tracking, it delivers reliable accuracy even in challenging conditions. Built with a durable magnesium-aluminum alloy shell, IP68 protection, and a wide operating temperature range (-45°C to +75°C), it ensures environmental resilience. With integrated Wi-Fi and Bluetooth connectivity and seamless compatibility with South's SurvStar software, the INNO5 enhances field efficiency with advanced CAD, mapping, and data collection tools.",
        "features": [
            "Rugged, high-performance GNSS RTK receiver module",
            "1698 channels for comprehensive satellite tracking",
            "Multi-constellation support (GPS, GLONASS, GALILEO, BDS, SBAS, IRNSS, QZSS)",
            "Multi-frequency tracking for reliable accuracy",
            "Durable magnesium-aluminum alloy shell construction",
            "IP68 protection for environmental resilience",
            "Wide operating temperature range (-45°C to +75°C)",
            "Integrated Wi-Fi and Bluetooth connectivity",
            "Seamless compatibility with South's SurvStar software",
            "Advanced CAD, mapping, and data collection tools",
            "Fast initialization under 10 seconds",
            "High initialization reliability >99.99%",
            "Multiple positioning modes for various applications",
            "Professional surveying and precision positioning capabilities"
        ],
        "specifications": {
            "GNSS Features": {
                "Channels": "1698",
                "Satellite Systems": {
                    "GPS": "L1C, L1C/A, L2C, L2P(Y), L5",
                    "GLONASS": "G1, G2, G3",
                    "BDS": "B1I, B2I, B3I, B1C, B2a, B2b",
                    "GALILEO": "E1, E5a, E5b, E6, AltBOC",
                    "SBAS": "L1*",
                    "IRNSS": "L5",
                    "QZSS": "L1, L2C, L5",
                    "MSS L-Band": "Reserve"
                }
            },
            "Positioning Performance": {
                "Output Rate": "1Hz~20Hz",
                "Initialization Time": "<10s",
                "Initialization Reliability": ">99.99%",
                "Code Differential Positioning": {
                    "Horizontal": "0.25m+1 ppm RMS",
                    "Vertical": "0.50m+1 ppm RMS"
                },
                "GNSS Static": {
                    "Horizontal": "2.5 mm+0.5 ppm RMS",
                    "Vertical": "3.5mm+0.5 ppm RMS"
                },
                "Static (Long Observation)": {
                    "Horizontal": "2.5 mm+0.1 ppm RMS",
                    "Vertical": "3mm+0.4 ppm RMS"
                },
                "Rapid Static": {
                    "Horizontal": "2.5 mm+0.5 ppm RMS",
                    "Vertical": "5mm+0.5 ppm RMS"
                },
                "PPK": {
                    "Horizontal": "3 mm+1 ppm RMS",
                    "Vertical": "5mm+1 ppm RMS"
                },
                "RTK(UHF)": {
                    "Horizontal": "8mm+1 ppm RMS",
                    "Vertical": "15mm+1 ppm RMS"
                },
                "RTK(NTRIP)": {
                    "Horizontal": "8mm+0.5ppm RMS",
                    "Vertical": "15mm+0.5ppm RMS"
                },
                "SBAS Positioning": "Typically <5m 3DRMS",
                "RTK Initialization Time": "2~8s"
            },
            "IMU": {
                "Accuracy": "8mm+0.7 mm/°tilt",
                "Tilt Angle": "Optimal accuracy within 60°"
            },
            "Hardware Performance": {
                "Dimension": "134mm(φ)×79mm(H)",
                "Weight": "860g (battery included)",
                "Material": "Magnesium aluminum alloy shell",
                "Operating Temperature": "-45℃~+75℃",
                "Storage Temperature": "-55℃~+85℃",
                "Humidity": "100% Non-condensing",
                "Waterproof/Dustproof": "IP68 standard",
                "Shock/Vibration": "Withstand 2 meters pole drop onto the cement ground naturally"
            },
            "Power Supply": {
                "Input": "6-28V DC, overvoltage protection",
                "Battery": "Inbuilt 7.4v 6800mAh rechargeable Lithium-ion battery",
                "Battery Life": {
                    "Static Mode": "25h",
                    "Rover Mode": "20h (optimal condition)"
                }
            },
            "Connectivity": {
                "Built-in Communication": "Wi-Fi and Bluetooth",
                "Software Compatibility": "Seamless compatibility with South's SurvStar software"
            }
        },
        "price": "₹ 6,33,245 + GST",
        "images": [
            "images/product_images/GNSS/SOUTH/INN05 GNSS RTK/south inn05.jpg",
            "images/product_images/GNSS/SOUTH/INN05 GNSS RTK/south inno5 all.jpg",
            "images/product_images/GNSS/SOUTH/INN05 GNSS RTK/south inno5 more.jpg",
            "images/product_images/GNSS/SOUTH/INN05 GNSS RTK/south inno5.jpg"
        ],
        "alt": "SOUTH INNO5 Advanced GNSS RTK Receiver"
    },
    {
        "brand": "SOUTH",
        "model": "V3S",
        "product_name": "SOUTH V3S",
        "category": "RTK Receiver",
        "description": "The South V3S (Insight V3) is a high-precision GNSS rover set designed for professional surveying and construction applications. Featuring a powerful 1698-channel GNSS engine, it supports GPS, GLONASS, BeiDou, Galileo, and more for reliable positioning in complex environments. Its 5th-generation IMU allows tilt compensation up to 60° without calibration, while the dual-camera system enables AR stakeout, visual positioning, and real-time 3D modeling for enhanced efficiency. Built with a rugged IP68-rated design and a robust battery offering up to 25 hours of operation, the V3S delivers superior durability, connectivity, and accuracy, making it ideal for land surveying, construction management, urban mapping, and geodetic applications.",
        "features": [
            "High-precision GNSS rover set for professional surveying",
            "Powerful 1698-channel GNSS engine",
            "Multi-constellation support (GPS, GLONASS, BeiDou, Galileo, SBAS, IRNSS, QZSS)",
            "5th-generation IMU with tilt compensation up to 60° without calibration",
            "Dual-camera system for AR stakeout and visual positioning",
            "Real-time 3D modeling capabilities",
            "Rugged IP68-rated design for durability",
            "Robust battery offering up to 25 hours of operation",
            "Superior connectivity and accuracy",
            "Ideal for land surveying and construction management",
            "Urban mapping and geodetic applications",
            "Reliable positioning in complex environments",
            "Enhanced field efficiency with advanced features",
            "Professional-grade surveying equipment"
        ],
        "specifications": {
            "GNSS Features": {
                "Channels": "1698",
                "Satellite Systems": {
                    "GPS": "L1C, L1C/A, L2C, L2P(Y), L5",
                    "GLONASS": "G1, G2, G3",
                    "BDS": "B1I, B2I, B3I, B1C, B2a, B2b",
                    "GALILEO": "E1, E5a, E5b, E6, AltBOC*",
                    "SBAS": "L1*",
                    "IRNSS": "L5*",
                    "QZSS": "L1, L2C, L5*",
                    "MSS L-Band": "BDS-PPP, GALILEO-HAS"
                }
            },
            "Positioning Performance": {
                "Output Rate": "1Hz~20Hz",
                "Initialization Time": "<10s",
                "Initialization Reliability": ">99.99%",
                "Code Differential Positioning": {
                    "Horizontal": "0.25 m +1 ppm RMS",
                    "Vertical": "0.50 m +1 ppm RMS"
                },
                "GNSS Static": {
                    "Horizontal": "2.5 mm +0.5 ppm RMS",
                    "Vertical": "3.5 mm +0.5 ppm RMS"
                },
                "Static (Long Observation)": {
                    "Horizontal": "2.5 mm +0.1 ppm RMS",
                    "Vertical": "3 mm +0.4 ppm RMS"
                },
                "Rapid Static": {
                    "Horizontal": "2.5 mm +0.5 ppm RMS",
                    "Vertical": "5 mm +0.5 ppm RMS"
                },
                "PPK": {
                    "Horizontal": "3 mm + 1 ppm RMS",
                    "Vertical": "5 mm +1 ppm RMS"
                },
                "RTK(UHF)": {
                    "Horizontal": "8 mm + 1 ppm RMS",
                    "Vertical": "15 mm +1 ppm RMS"
                },
                "RTK(NTRIP)": {
                    "Horizontal": "8 mm +0.5 ppm RMS",
                    "Vertical": "15 mm +0.5 ppm RMS"
                },
                "SBAS Positioning": "Typically <5m 3DRMS",
                "RTK Initialization Time": "2~8s"
            },
            "IMU": {
                "Generation": "5th-generation IMU",
                "Tilt Compensation": "Up to 60° without calibration",
                "Tilt Angle": "0°~60°"
            },
            "Camera System": {
                "Dual-Camera System": "AR stakeout, visual positioning, and real-time 3D modeling"
            },
            "Applications": {
                "Professional Surveying": "Land surveying, construction management",
                "Mapping": "Urban mapping, geodetic applications",
                "Construction": "Construction management and monitoring"
            }
        },
        "price": "₹ 3,10,662 + GST",
        "images": [
            "images/product_images/GNSS/SOUTH/V3S GNSS RTK/south v3s.jpg",
            "images/product_images/GNSS/SOUTH/V3S GNSS RTK/south v3s more.jpg",
            "images/product_images/GNSS/SOUTH/V3S GNSS RTK/south v3s top.png"
        ],
        "alt": "SOUTH V3S High-Precision GNSS Rover Set"
    },
    {
        "brand": "SOUTH",
        "model": "G7Q",
        "product_name": "SOUTH G7Q",
        "category": "RTK Receiver",
        "description": "The South Galaxy G7Q is a lightweight and rugged RTK GNSS receiver designed for professional surveying. With IMU tilt compensation, it delivers fast, precise measurements even on rough terrain. Its 6800mAh battery ensures up to 15 hours of work with rapid Type-C charging. Featuring advanced 'Beaver' radio and 'Farlink' protocol, it offers stable RTK performance and long-range connectivity up to 8 km. Reliable and efficient, the G7Q is built for mapping, stakeout, and construction tasks.",
        "features": [
            "Lightweight and rugged RTK GNSS receiver",
            "1598 channels for comprehensive satellite tracking",
            "IMU tilt compensation for precise measurements on rough terrain",
            "6800mAh battery for up to 15 hours of work",
            "Rapid Type-C charging capability",
            "Advanced 'Beaver' radio technology",
            "Farlink protocol for stable RTK performance",
            "Long-range connectivity up to 8 km",
            "Multi-constellation GNSS support",
            "Professional surveying applications",
            "Mapping, stakeout, and construction tasks",
            "Reliable and efficient operation",
            "Fast and precise measurements",
            "Built for professional surveying needs"
        ],
        "specifications": {
            "GNSS Features": {
                "Channels": "1598",
                "Satellite Systems": {
                    "GPS": "L1, L1C, L2C, L2P, L5",
                    "GLONASS": "L1C/A, L1P, L2C/A, L2P, L3",
                    "BDS": {
                        "BDS-2": "B1I, B2I, B3I",
                        "BDS-3": "B1I, B3I, B1C, B2a, B2b"
                    },
                    "GALILEO": "E1, E5A, E5B, E6C, AltBOC*",
                    "SBAS": "L1* (WAAS/MSAS/EGNOS/GAGAN)",
                    "IRNSS": "L5*",
                    "QZSS": "L1, L2C, L5*",
                    "MSS L-Band": "Reserve"
                }
            },
            "Positioning Performance": {
                "Output Rate": "1Hz~20Hz",
                "Initialization Time": "<10s",
                "Initialization Reliability": ">99.99%",
                "Code Differential GNSS Positioning": {
                    "Horizontal": "0.25m+1ppm RMS",
                    "Vertical": "0.50 m + 1ppm RMS"
                },
                "GNSS Static": {
                    "Horizontal": "2.5 mm +0.5 ppm RMS",
                    "Vertical": "5 mm +0.5 ppm RMS"
                },
                "Real-time Kinematic (Baseline<30km)": {
                    "Horizontal": "8 mm +1 ppm RMS",
                    "Vertical": "15 mm + 1 ppm RMS"
                },
                "SBAS Positioning": "Typically <5m 3DRMS",
                "RTK Initialization Time": "2~8s"
            },
            "IMU": {
                "Tilt Compensation": "Additional horizontal pole tip uncertainty typically less than 10mm + 0.7 mm/° tilt down to 30°",
                "Tilt Angle": "0°~60°"
            },
            "Power Supply": {
                "Battery": "6800mAh battery",
                "Battery Life": "Up to 15 hours of work",
                "Charging": "Rapid Type-C charging"
            },
            "Communication": {
                "Radio Technology": "Advanced 'Beaver' radio",
                "Protocol": "Farlink protocol",
                "Range": "Long-range connectivity up to 8 km",
                "Performance": "Stable RTK performance"
            },
            "Applications": {
                "Professional Surveying": "Mapping, stakeout, and construction tasks",
                "Field Work": "Reliable and efficient operation in various conditions"
            }
        },
        "price": "₹ 2,38,977 + GST",
        "images": [
            "images/product_images/GNSS/SOUTH/G 7Q GNSS RTK/south g7q.jpg",
            "images/product_images/GNSS/SOUTH/G 7Q GNSS RTK/south g7q more.jpg",
            "images/product_images/GNSS/SOUTH/G 7Q GNSS RTK/south g7q single.jpg"
        ],
        "alt": "SOUTH G7Q Lightweight and Rugged RTK GNSS Receiver"
    },
    {
        "brand": "STONEX",
        "model": "S900A/S9II/S900+",
        "product_name": "STONEX S900A/S9II/S900+",
        "category": "RTK Receiver",
        "description": "The Stonex S900A/S9II/S900+ is a high-precision GNSS RTK receiver designed for professional surveying and mapping. Equipped with a powerful 1408-channel board, it supports multiple constellations including GPS, GLONASS, BEIDOU, and Galileo for reliable positioning in any environment. With integrated 4G modem, UHF, Bluetooth, and Wi-Fi, it ensures fast and flexible communication, while the optional IMU and e-bubble sensor allow for accurate tilt measurements up to 60° without leveling. Ruggedly built with an IP67 rating and resistance to 2-meter drops, the S900 series offers centimeter-level RTK accuracy, up to ±(10mm+1ppm) plane and ±(20mm+1ppm) elevation precision, making it ideal for demanding fieldwork.",
        "features": [
            "High-precision GNSS RTK receiver for professional surveying",
            "Powerful 1408-channel board for comprehensive satellite tracking",
            "Multi-constellation support (GPS, GLONASS, BEIDOU, Galileo)",
            "Integrated 4G modem, UHF, Bluetooth, and Wi-Fi connectivity",
            "Optional IMU and e-bubble sensor for tilt measurements up to 60°",
            "Centimeter-level RTK accuracy with high precision",
            "IP67 rating for rugged field conditions",
            "Resistance to 2-meter drops for durability",
            "Fast and flexible communication options",
            "Reliable positioning in any environment",
            "Professional surveying and mapping applications",
            "Industrial-grade controller P9 with Windows Mobile 6.5",
            "5 megapixel autofocus camera for documentation",
            "Extended service time for fieldwork"
        ],
        "specifications": {
            "Model": "S9II/S900A/S900+",
            "Satellite System": "Beidou+GPS+GLONASS+Galileo",
            "Track Features": {
                "Channel": "1408",
                "GPS": "L1 C/A, L2E, L2C, L5",
                "GLONASS": "L1 C/A, L1P, L2 C/A(GLONASS M), L2P",
                "BDS": "B1, B2",
                "GIOVE-A": "L1 BOC, E5A, E5B, E5AltBOC1",
                "GIOVE-B": "L1 CBOC, E5A, E5B, E5AltBOC1",
                "SBAS": "WAAS, MSAS, EGNOS, QZSS"
            },
            "Performance Indicators": {
                "Static Measurement": {
                    "Plane Precision": "±(2.5mm + 1ppm) RMS",
                    "Elevation Accuracy": "±(5mm + 1ppm) RMS"
                },
                "RTK Measurement": {
                    "Plane Precision": "±(10mm + 1ppm) RMS",
                    "Elevation Accuracy": "±(20mm + 1ppm) RMS"
                },
                "SBAS Positioning": {
                    "Plane Precision": "<1m 3DRMS",
                    "Elevation Accuracy": "<5m 3DRMS"
                },
                "Initialization Time": "<10s",
                "Initialization Reliability": ">99.99%"
            },
            "Environmental Indicators": {
                "Working Temperature": "-30℃~+65℃",
                "Storage Temperature": "-40℃~+80℃",
                "Waterproof and Dustproof": "IP67",
                "Drop": "Resistance to 2 m drop (concrete hard ground)",
                "Waterproof": "Immersing 1 meter in water (30 minutes)",
                "Humidity": "100% condensation resistance"
            },
            "Memory and Data": {
                "Internal Storage": "Onboard 4G SD card expansion, maximum support 32G",
                "Differential Output": "RTCM2.3, RTCM3.0, RTCM3.X, CMR, CMR+"
            },
            "GNSS Antenna Performance": "The internal integrated quad-feeder microstrip antenna, zero-phase center, built-in multipath suppression plate",
            "Network Communication": "Built-in WCDMA 3.5G network communication module; Customizable CDMA2000 3G network communication",
            "Wireless Communications": {
                "Communication Protocol": "TrimTalk is interchangeable with international brand radio and can be customized with domestic hosts",
                "UHF Radio": {
                    "Built-in Transceiver": "0.5W/2W",
                    "Outer Launch": "5W/35W",
                    "Working Frequency": "410-470MHz"
                }
            },
            "Physical and Power Characteristics": {
                "Size": "φ19cm×9.9cm",
                "Weight": "1.2kg",
                "Battery Capacity": "Single block 3400mAh",
                "Keys": "2",
                "Service Time": "6 hours"
            },
            "Industrial-Grade Controller P9": {
                "Operating System": "Windows Mobile 6.5",
                "Hardware Platform": "AM335X frequency 1GHz",
                "Onboard Memory": "RAM: 512MB DDR3 onboard memory 4G",
                "Display": "3.7 inches Blanwiew TFT, 480*640 VGA resolution ratio",
                "Battery": "7.2V/3400mAH",
                "Waterproof and Dustproof": "IP67",
                "Working Temperature": "-30℃~+60℃",
                "Storage Temperature": "-30℃~+70℃",
                "Drop": "Resistance to 2 m drop (concrete hard ground)",
                "Camera": "5 megapixel autofocus",
                "Communication": "Wi-Fi / USB OTG / 3.5G"
            }
        },
        "price": "₹ 5,53,595 + GST",
        "images": [
            "images/product_images/GNSS/STONEX/S900AS9IIS900+ GNSS/S900A.jpg",
            "images/product_images/GNSS/STONEX/S900AS9IIS900+ GNSS/stonex s900 img.jpg"
        ],
        "alt": "STONEX S900A/S9II/S900+ High-Precision GNSS RTK Receiver"
    },
    {
        "brand": "STONEX",
        "model": "S6II/S980A/S980+",
        "product_name": "STONEX S6II/S980A/S980+",
        "category": "RTK Receiver",
        "description": "The Stonex S6II, S980A, and S980+ are advanced GNSS RTK receivers built for high-precision surveying. Supporting GPS, GLONASS, Galileo, BeiDou, QZSS, and IRNSS, they deliver centimeter-level accuracy with 800+ channels. Equipped with IMU tilt compensation, 4G LTE, Wi-Fi, Bluetooth, and UHF radio, they ensure seamless field connectivity. Their rugged magnesium alloy design with touch display offers durability and ease of use, making them reliable solutions for professional surveyors. Long-lasting batteries support extended fieldwork, while seamless CAD and GIS integration enhances workflow efficiency.",
        "features": [
            "Advanced GNSS RTK receivers for high-precision surveying",
            "800+ channels for comprehensive satellite tracking",
            "Multi-constellation support (GPS, GLONASS, Galileo, BeiDou, QZSS, IRNSS)",
            "Centimeter-level accuracy for professional applications",
            "IMU tilt compensation for enhanced precision",
            "4G LTE, Wi-Fi, Bluetooth, and UHF radio connectivity",
            "Rugged magnesium alloy design for durability",
            "Touch display for ease of use",
            "Long-lasting batteries for extended fieldwork",
            "Seamless CAD and GIS integration",
            "Reliable solutions for professional surveyors",
            "Enhanced workflow efficiency",
            "Linux operating system for stability",
            "32 GB memory for data storage"
        ],
        "specifications": {
            "Tracking": {
                "Board": "Novatel OEM729",
                "Channels": "1408",
                "Satellite Systems": {
                    "GPS": "L1C/A, L1C, L1P, L2C, L2P, L5",
                    "GLONASS": "L1C/A, L1P, L2C/A, L2P, L3",
                    "Galileo": "E1, E5a, E5b, ALTBOC, E6",
                    "BeiDou": "B1, B2, B3, ACEBOC",
                    "QZSS": "L1 C/A, L1C, L2C, L5, L6",
                    "IRNSS": "L5",
                    "SBAS": "L1, L5"
                },
                "Update Rate": "5 Hz",
                "Operating System": "Linux",
                "Memory": "32 GB"
            },
            "Positioning": {
                "Static Survey": {
                    "Horizontal": "3 mm + 0.1 ppm RMS",
                    "Vertical": "3.5 mm + 0.4 ppm RMS"
                },
                "RTK (< 30 Km)": {
                    "Horizontal": "8 mm + 1 ppm RMS",
                    "Vertical": "15 mm + 1 ppm RMS"
                },
                "Code Differential": "0.40 m RMS",
                "SBAS Accuracy": "0.60 m"
            },
            "Internal UHF Radio": {
                "Model": "TRM 501",
                "Type": "Tx – Rx",
                "Frequency Range": "410 – 470 MHz, 902.4 – 928 MHz",
                "Channel Spacing": "12.5 KHz / 25 KHz",
                "Transmission Power": "2-5 watt",
                "Maximum Range": "> 5 km with 2 watt, > 10 Km with 5 watt"
            },
            "Physical": {
                "Size": "Φ151mm x 94.5mm",
                "Weight": "1.50 Kg",
                "Operating Temperature": "-40 °C to +65 °C",
                "Storage Temperature": "-40 °C to +80 °C",
                "Waterproof/Dustproof": "IP67",
                "Shock Resistance": "Designed to endure a 2 m pole drop onto a concrete floor with no damage",
                "Vibration": "Vibration resistant"
            },
            "Power Supply": {
                "Battery": "Rechargeable 7.2 V – 13.600 mAh",
                "Voltage": "9 to 28 V DC external power input with over-voltage protection (5 pins Lemo)",
                "Working Time": "Up to 10 hours",
                "Charge Time": "Typically 4 hours"
            }
        },
        "price": "₹ 6,15,323 + GST",
        "images": [
            "images/product_images/GNSS/STONEX/S6II S980A S980+ GNSS/stonex s611.jpg",
            "images/product_images/GNSS/STONEX/S6II S980A S980+ GNSS/s611 img.jpg",
            "images/product_images/GNSS/STONEX/S6II S980A S980+ GNSS/stonex s611 img.jpg"
        ],
        "alt": "STONEX S6II/S980A/S980+ Advanced GNSS RTK Receiver"
    },
    {
        "brand": "STONEX",
        "model": "S5II/S990A/S990+",
        "product_name": "STONEX S5II/S990A/S990+",
        "category": "RTK Receiver",
        "description": "The Stonex S5II, S990A, and S990+ are high-precision GNSS RTK receivers built for professional surveying and mapping. With a 1408-channel multi-constellation board, IMU tilt compensation up to 60°, and Atlas® correction support, they ensure reliable centimeter-level accuracy even in tough environments. Featuring Bluetooth, Wi-Fi, 4G, UHF, and a color touch display with WebUI, they deliver smooth field performance. A 10,200mAh battery provides up to 12 hours of use with convenient USB Type-C charging. Integrated with Surpad 4.2 software, they support CAD, tilt survey, road stakeout, GIS data collection, and flexible data workflows.",
        "features": [
            "High-precision GNSS RTK receivers for professional surveying",
            "1408-channel multi-constellation board for comprehensive satellite tracking",
            "IMU tilt compensation up to 60° for enhanced accuracy",
            "Atlas® correction support for worldwide centimeter-level accuracy",
            "Multi-constellation support (GPS, GLONASS, BEIDOU, GALILEO, QZSS, IRNSS)",
            "Color touch display with WebUI for easy management",
            "Comprehensive connectivity: Bluetooth, Wi-Fi, 4G, UHF",
            "10,200mAh battery for up to 12 hours of use",
            "USB Type-C charging for convenience",
            "Integrated Surpad 4.2 software compatibility",
            "CAD, tilt survey, road stakeout, and GIS data collection support",
            "Flexible data workflows for professional applications",
            "Double frequency UHF radio (410-470MHz and 902.4-928MHz)",
            "Internal 4G modem with worldwide signal support",
            "1PPS for precise synchronization time applications"
        ],
        "specifications": {
            "Model": "S5II/S990A/S990+",
            "GNSS Features": {
                "Channels": "1408 (800 channels for real-time navigation)",
                "Multi-Constellation": "GPS, GLONASS, BEIDOU, GALILEO, QZSS, IRNSS",
                "Real-time Navigation": "Excellent on-board real-time navigation solution with high accuracy",
                "Atlas® Correction": "Worldwide centimeter-level correction data through L-band communication satellites"
            },
            "IMU Technology": {
                "Tilt Compensation": "Up to 60° inclination",
                "Fast Initialization": "Quick initialization for fast and precise survey",
                "Performance": {
                    "No Electromagnetic Disturbances": "No problem of electromagnetic disturbances",
                    "Fast Initialization": "Fast initialization capability",
                    "Inclination Range": "Up to 60° inclination",
                    "Accuracy at 30°": "2 cm accuracy at 30°",
                    "Accuracy at 60°": "5 cm accuracy at 60°",
                    "Survey Performance": "Fast and precise survey"
                }
            },
            "Connectivity": {
                "Bluetooth": "Built-in Bluetooth connectivity",
                "Wi-Fi": "Wi-Fi connectivity for wireless communication",
                "4G Modem": "Internal 4G modem that operates with all world signals, guaranteeing fast internet connection",
                "UHF Radio": {
                    "Type": "Double frequency radio",
                    "Frequency Range": "410-470MHz and 902.4-928MHz",
                    "Coverage": "Supports the needs of each country"
                }
            },
            "Display and Interface": {
                "Color Touch Display": "Convenient color touch display for easy management of the most important functions",
                "WebUI": "Web-based user interface for complete control of the receiver"
            },
            "Power Supply": {
                "Battery": "10,200mAh internal battery",
                "Working Time": "Up to 12 hours of use (9 hours for S990A)",
                "Charging": "USB Type-C charging connector"
            },
            "Software Integration": {
                "Surpad 4.2": "Integrated with Surpad 4.2 software",
                "Applications": "CAD, tilt survey, road stakeout, GIS data collection",
                "Data Workflows": "Flexible data workflows for professional applications"
            },
            "Special Features": {
                "1PPS": "Can be applied to scenarios that require precise synchronization time to ensure that multiple facilities work together or that use the same parameters for system integration based on precise time",
                "aRTK Function": "Works in particularly difficult areas with Atlas® correction service"
            },
            "Performance": {
                "Accuracy": "Centimeter-level accuracy even in tough environments",
                "Reliability": "Reliable performance in challenging conditions",
                "Field Performance": "Smooth field performance with comprehensive connectivity"
            }
        },
        "price": "₹ 6,15,323 + GST",
        "images": [
            "images/product_images/GNSS/STONEX/S5II S990AS990+ GNSS/stonex s511.jpg",
            "images/product_images/GNSS/STONEX/S5II S990AS990+ GNSS/stonex s511 img.jpg",
            "images/product_images/GNSS/STONEX/S5II S990AS990+ GNSS/stonex s511 single.jpg"
        ],
        "alt": "STONEX S5II/S990A/S990+ High-Precision GNSS RTK Receiver with IMU Technology"
    },
    {
        "brand": "STONEX",
        "model": "S3II SE",
        "product_name": "STONEX S3II SE",
        "category": "RTK Receiver",
        "description": "The Stonex S3II SE is an 800-channel multi-constellation GNSS RTK receiver designed for precise land surveying. Supporting GPS, GLONASS, BEIDOU, Galileo, QZSS, and IRNSS with L-Band corrections, it delivers high-accuracy positioning in real time. Its compact, rugged IP67-rated design houses an internal antenna integrating GNSS, Bluetooth, and Wi-Fi for optimized signal performance. Equipped with a built-in 4G modem, Type-C data transfer, and a high-capacity 6800mAh battery, it ensures all-day field operation. Running on Linux with a Web UI, the S3II SE is ideal for RTK, DGPS, and various surveying applications, offering reliability, connectivity, and portability in challenging environments.",
        "features": [
            "800-channel multi-constellation GNSS RTK receiver for precise land surveying",
            "Multi-constellation support (GPS, GLONASS, BEIDOU, Galileo, QZSS, IRNSS)",
            "L-Band corrections for high-accuracy positioning in real time",
            "Compact, rugged IP67-rated design for field durability",
            "Internal antenna integrating GNSS, Bluetooth, and Wi-Fi",
            "Built-in 4G modem for connectivity",
            "Type-C data transfer for convenience",
            "High-capacity 6800mAh battery for all-day field operation",
            "Linux operating system with Web UI",
            "Ideal for RTK, DGPS, and various surveying applications",
            "Reliability, connectivity, and portability in challenging environments",
            "Optimized signal performance with integrated antenna",
            "Professional surveying and mapping capabilities",
            "Real-time positioning with high accuracy"
        ],
        "specifications": {
            "Model": "S3II SE",
            "GNSS Features": {
                "Number of Channels": "1408",
                "Tracking Features": {
                    "BDS-2": "B1, B2, B3",
                    "BDS-3": "B1C, B2a, B2b, ACEBOC",
                    "GPS": "L1C/A, L1C, L1P, L2C, L2P, L5",
                    "GLONASS": "G1, G2, G3",
                    "Galileo": "E1, E5a, E5b, AltBOC, E6",
                    "QZSS": "L1C/A, L1C, L2C, L5, LEX"
                },
                "Data Output": "NMEA0183, NMEA2000, Crescent binary",
                "Differential Output": "RTCM SC-104(SBAS/Beacon) has its own differential format ROX, RTCM2.x, RTCM3.x, CMR, CMR+"
            },
            "Accuracy Index": {
                "Static Measurement": {
                    "Level": "±(2.5+0.5×10-6D) mm",
                    "Vertical": "±(5+0.5×10-6D) mm"
                },
                "RTK Measurement": {
                    "Level": "±(8+1×10-6D) mm",
                    "Vertical": "±(15+1×10-6D) mm"
                },
                "Inertial Navigation Measurement": {
                    "Compensation Accuracy": "8mm+0.3mm/°tilt (<2cm within 30°)",
                    "Compensation Position": "0~70°",
                    "Inertial Navigation Update Rate": "200Hz",
                    "Note": "Need to be activated separately"
                }
            },
            "System Platform": {
                "Operating System": "Linux",
                "Built-in Storage": "Onboard 8G"
            },
            "Connectivity": {
                "Bluetooth": "V2.1+EDR / V4.0 Dual Mode, Class2",
                "Wi-Fi": "802.11 b/g/n",
                "Global Radio": {
                    "Protocol": "TrimTalk, TrimMaskⅢ, PCCEOT, Geotalk, Hitarget",
                    "Frequency": "410-470MHz",
                    "Number of Channels": "7+2400 (7 fixed channels, 2400 customizable channels)",
                    "External Radio": "5W/35W adjustable"
                }
            },
            "Electrical Properties": {
                "Battery": "Built-in smart lithium battery, 6800mAh, 7.2V",
                "Input Voltage": "9~28V DC"
            },
            "Human-Computer Interaction": {
                "Button": "The power button is used to turn the host on and off. Short press once to broadcast the current working mode and status.",
                "Data Interface": {
                    "TNC Interface": "Connecting the built-in radio antenna",
                    "5-pin Interface": "Used to connect external power supply and external radio",
                    "Type-C": "For direct charging, data transfer"
                }
            },
            "Physical Index": {
                "Size": "140mm×140mm×71mm",
                "Weight": "1100g"
            },
            "Environmental Performance": {
                "Operating Temperature": "-30℃~+70℃",
                "Storage Temperature": "-40℃~+80℃",
                "Waterproof and Dustproof": "IP68",
                "Anti-drop": "2 meters drop with the pole (concrete hard ground)",
                "Humidity": "Resist 99% condensation"
            },
            "Handbook Basic Parameters": {
                "Model": "P9Ⅲ",
                "Operating System": "Android 9",
                "Processor": "Qualcomm octa-core 64-bit",
                "RAM+ROM": "2GB high-speed DDR3+16GB",
                "External Storage": "Maximum support 512GB SD expansion",
                "Sensor": "Electronic Compass, Electronic Bubble, Gravity Sensor",
                "Camera": "13 million autofocus camera",
                "Mobile Network": "Mobile, Telecom, Unicom 4G full Netcom",
                "WiFi/Bluetooth": "802.11b/g/n, 4.1+ LE",
                "Built-in Battery": "6000mAh, 3.8V, 22.8Wh",
                "Protection Class": "IP67",
                "Fall": "Withstands a 1.2-meter drop from a hard floor",
                "Operating Temperature": "-30℃~+60℃",
                "Storage Temperature": "-40℃~+80℃"
            }
        },
        "price": "₹ 4,89,875 + GST",
        "images": [
            "images/product_images/GNSS/STONEX/S3II SE GNSS RTK/stonex s311 se single.jpg",
            "images/product_images/GNSS/STONEX/S3II SE GNSS RTK/s311 se.jpg",
            "images/product_images/GNSS/STONEX/S3II SE GNSS RTK/stonex s311 se img.jpg",
            "images/product_images/GNSS/STONEX/S3II SE GNSS RTK/stonex s311 se imgs.jpg"
        ],
        "alt": "STONEX S3II SE Multi-Constellation GNSS RTK Receiver"
    },
    {
        "brand": "STONEX",
        "model": "S3AR",
        "product_name": "STONEX S3AR",
        "category": "RTK Receiver",
        "description": "The Stonex S3AR is a high-performance, compact GNSS RTK receiver engineered for surveying, mapping, and construction applications. Featuring advanced fourth-generation IMU technology and full-constellation, multi-frequency support including Beidou III, it delivers precise positioning even in challenging environments. Its visual stakeout capability uses a fusion algorithm combining satellite navigation, IMU, and vision to mark points directly on-site for fast, accurate deployment. Lightweight and portable at 513g, with a robust design and a 10000mAh battery, the S3AR ensures extended field operation and seamless workflow via Wi-Fi connectivity. Ideal for land surveying, mapping, construction, and monitoring tasks, it provides professionals with reliability, accuracy, and efficiency.",
        "features": [
            "High-performance, compact GNSS RTK receiver for professional applications",
            "Advanced fourth-generation IMU technology for enhanced precision",
            "Full-constellation, multi-frequency support including Beidou III",
            "Visual stakeout capability with fusion algorithm technology",
            "Combines satellite navigation, IMU, and vision for direct on-site marking",
            "Lightweight and portable design at 513g",
            "Robust construction for field durability",
            "10000mAh battery for extended field operation",
            "Seamless workflow via Wi-Fi connectivity",
            "Precise positioning even in challenging environments",
            "Fast and accurate deployment capabilities",
            "Ideal for land surveying, mapping, construction, and monitoring",
            "Professional reliability, accuracy, and efficiency",
            "TTS voice broadcast for user guidance",
            "Electronic bubble support for leveling"
        ],
        "specifications": {
            "Model": "S3AR",
            "System Configuration": {
                "Operating System": "Linux",
                "Built-in Storage": "8GB, supports MicroSD storage expansion",
                "Bluetooth": "V2.1 + EDR/V4.0 dual-mode, Class2",
                "WiFi": "802.11b/g/n",
                "Voice": "TTS voice broadcast",
                "Electronic Bubble": "Support"
            },
            "Environmental Performance": {
                "Operating Temperature": "-30℃ ~ +65℃",
                "Storage Temperature": "-40℃ ~ +80℃",
                "Waterproof and Dustproof": "IP67",
                "UHF Radio Station": "TX and RX(1w), 3-5 km typically",
                "Operating Frequency": "410-470mhz"
            },
            "Satellite Characteristics": {
                "Satellite Channel": "1408",
                "Satellite Systems": {
                    "GPS": "L1C/A, L1C, L1P(Y), L2C, L2P(Y), L5",
                    "GLONASS": "G1P1, G2P2, G1OC, G2OC, G3OC",
                    "BDS-2": "B1i, B2i, B3i",
                    "BDS-3": "B1C, B2a, B2b, ACEBOC",
                    "Galileo": "E1BC, E5a, E5b, E5ALTBOC, E6BC",
                    "QZSS": "L1CA, L2C, L5, L1C, LEX",
                    "L-Band": "Support",
                    "SBAS": "SBAS WAAS, GAGAN, MSAS, EGNOS, SDCM, BDS"
                }
            },
            "Inertial Navigation IMU": {
                "Tilt Measurement": "Supported",
                "Tilt Accuracy": "60°/2cm (horizontal)",
                "Technology": "Advanced fourth-generation IMU technology"
            },
            "Power Supply Characteristics": {
                "Battery Capacity": "7.2V, 10000mAh",
                "External Power Supply": "9-28V DC with overvoltage protection"
            },
            "Physical Indicators": {
                "Weight": "550g",
                "Size": "120mm*H72.5mm"
            },
            "Visual Stakeout Capability": {
                "Technology": "Fusion algorithm combining satellite navigation, IMU, and vision",
                "Function": "Mark points directly on-site for fast, accurate deployment",
                "Performance": "Precise positioning even in challenging environments"
            },
            "Connectivity": {
                "Wi-Fi": "Seamless workflow via Wi-Fi connectivity",
                "UHF Radio": "TX and RX(1w), 3-5 km typically",
                "Operating Frequency": "410-470mhz"
            },
            "Applications": {
                "Primary Use": "Land surveying, mapping, construction, and monitoring tasks",
                "Professional Benefits": "Reliability, accuracy, and efficiency for professionals"
            }
        },
        "price": "₹ 2,56,898 + GST",
        "images": [
            "images/product_images/GNSS/STONEX/S3AR GNSS RTK/stonex s3ar image.jpg",
            "images/product_images/GNSS/STONEX/S3AR GNSS RTK/s3ar img.jpg",
            "images/product_images/GNSS/STONEX/S3AR GNSS RTK/stonex s3ar images.jpg",
            "images/product_images/GNSS/STONEX/S3AR GNSS RTK/stonex s3ar img.jpg"
        ],
        "alt": "STONEX S3AR Compact GNSS RTK Receiver with Visual Stakeout"
    },
    {
        "brand": "STONEX",
        "model": "S3+",
        "product_name": "STONEX S3+",
        "category": "RTK Receiver",
        "description": "The Stonex S3+ is a rugged, high-performance GNSS RTK receiver designed for surveying and mapping. Featuring a 394-channel multi-constellation GNSS board, internal UHF radio, Wi-Fi/Web UI control, and Bluetooth connectivity, it delivers accurate real-time positioning and seamless data management. Built with IP67 water and dust resistance, a durable design, and a long-lasting battery, the S3+ ensures all-day reliability in challenging environments. Ideal for land surveys, construction, marine, and hydrographic applications, it supports multiple GPS protocols for versatile field use. The S3+ provides a high cost-effective RTK solution for engineering users with stronger performance, magnesium alloy fuselage material, intelligent system, and built-in star chain to continue improving efficiency.",
        "features": [
            "Rugged, high-performance GNSS RTK receiver for surveying and mapping",
            "International first-class high precision board card",
            "394-555 channels tracking 14 signal systems simultaneously",
            "Fully supports four global satellite navigation systems",
            "Magnesium alloy fuselage material - lightweight and durable",
            "Intelligent system for easy operation",
            "Built-in star chain to continue improving efficiency",
            "Multi-constellation support (BDS, GPS, GLONASS, Galileo, IRNSS, QZSS, SBAS)",
            "Internal UHF radio with adjustable power",
            "Wi-Fi/Web UI control for seamless data management",
            "Bluetooth connectivity for wireless communication",
            "IP67 water and dust resistance for challenging environments",
            "Long-lasting battery for all-day reliability",
            "Multiple GPS protocols for versatile field use",
            "Ideal for land surveys, construction, marine, and hydrographic applications",
            "High cost-effective RTK solution for engineering users"
        ],
        "specifications": {
            "Model": "S3+",
            "Satellite System": "BeiDou/GPS/GLONASS/Galileo, ATLAS",
            "Tracking": {
                "Channel": "1408 channels",
                "GPS": "L1, L2, L5",
                "GLONASS": "G1 C/P, G2C, G2P, G3",
                "BDS": "B1, B2, B3",
                "Galileo": "E1, E5a, E5b",
                "Aided Positioning": {
                    "IRNSS": "L5",
                    "SBAS": "L1, L5",
                    "QZSS": "L1 C/A, L1C, L2C, L5, L6",
                    "L-BAND": "TerraStar(optional)",
                    "RTK ASSIST": "optional"
                }
            },
            "Performance Index": {
                "Static H Accuracy": "±(2.5mm+1ppm) RMS",
                "Static V Accuracy": "±(5mm+1ppm) RMS",
                "RTK Measure H Accuracy": "±(8mm+1ppm) RMS",
                "RTK Measure V Accuracy": "±(15mm+1ppm) RMS",
                "ATLAS Position": {
                    "H": "5cm",
                    "V": "10cm"
                },
                "Initialization Time": "<10s",
                "Initialization Reliability": ">99.99%",
                "Data Output Rate": "1Hz-20Hz"
            },
            "Static Storage and Data Output": {
                "Storage Format": "Dat/Rinex",
                "Storage Memory": "Standard 16G",
                "Storage Way": "Two formats of data can be stored at the same time",
                "Download Way": "Support USB download & Web download",
                "Export Format": "NMEA0183, PJK Planar coordinates, binary codes",
                "Export Way": "WiFi/RS 232/radio/network"
            },
            "Connectivity": {
                "Bluetooth": "2.1/4.1 LE dual Modular",
                "WiFi": "802.11 b/g/n",
                "Voice": "Support voice broadcasting",
                "Communication Protocol": "TrimTalk / TrimMask 3; PCC EOT; Geotalk; Hi-target",
                "Radio": {
                    "Built-in Transceiver": "0.5W/1W (can adjust)",
                    "External Launch": "5W/35W (can adjust)",
                    "Working Frequency": "410-470MHz"
                }
            },
            "I/O Port": {
                "LEMO Data Port": "1 LEMO data port, USB data download, U disk upgrade function",
                "LEMO Port": "1 LEMO port, External Output Input, External power supply",
                "LEMO Power Port": "1 LEMO power port",
                "TNC Radio Port": "1 TNC radio port"
            },
            "Difference Scheme": "RTCM2.X, RTCM3.X, CMR, CMR+, ROX",
            "GNSS Antenna Characteristics": "Integrated built-in antenna with zero phase center difference",
            "Environment": {
                "Working Temperature": "-30ºC~+70ºC",
                "Storage Temperature": "-40ºC~+80ºC",
                "Waterproof and Dust-proof": "IP67",
                "Fall Prevention": "Resistance to 2 m drop with pole (hard ground with concrete)",
                "Water Proof": "Immersion 1 m underwater (30 minutes)",
                "Humidity": "100% condensation resistance"
            },
            "Physical and Power Characteristics": {
                "Using Time": ">10 hours",
                "Size": "146mm×146mm×76mm",
                "Weight": "1.2kg",
                "Battery": "7.2V 6800mAh",
                "Key": "1 key"
            },
            "Material": "Magnesium alloy fuselage material - lightweight and durable",
            "System": "Intelligent system for easy operation",
            "Efficiency": "Built-in star chain to continue improving efficiency"
        },
        "price": "₹ 8,12,456 + GST",
        "images": [
            "images/product_images/GNSS/STONEX/S3+ GNSS RTK/stonex s3+ image.jpg",
            "images/product_images/GNSS/STONEX/S3+ GNSS RTK/stonex s3+ img.jpg",
            "images/product_images/GNSS/STONEX/S3+ GNSS RTK/stonex s3+ imgs.jpg"
        ],
        "alt": "STONEX S3+ High-Performance GNSS RTK Receiver"
    },
    {
        "brand": "STONEX",
        "model": "S3II/S700",
        "product_name": "STONEX S3II/S700 - Advanced GNSS RTK Receiver",
        "category": "RTK Receiver",
        "description": "The Stonex S3II and S700A are compact, high-performance GNSS receivers designed for professional surveying and mapping. Equipped with 700-channel multi-constellation boards supporting GPS, GLONASS, Galileo, BeiDou, QZSS, and IRNSS, they deliver centimeter-level accuracy via RTK technology. An internal antenna integrates GNSS, Bluetooth, and Wi-Fi for stable signal reception, while a Linux OS with WEB UI ensures user-friendly operation. With IP67-rated rugged design, a high-capacity battery, 4G modem, and Type-C connectivity, these receivers offer durable, all-day field performance. Compatible with Cube A and other surveying software, they support multiple data formats including shapefiles, DXF, CSV, and KML for seamless workflow integration.",
        "features": [
            "Compact, high-performance GNSS receivers for professional surveying",
            "700-channel multi-constellation boards for comprehensive satellite tracking",
            "Multi-constellation support (GPS, GLONASS, Galileo, BeiDou, QZSS, IRNSS)",
            "Centimeter-level accuracy via RTK technology",
            "Internal antenna integrating GNSS, Bluetooth, and Wi-Fi",
            "Linux OS with WEB UI for user-friendly operation",
            "IP67-rated rugged design for field durability",
            "High-capacity battery for all-day field performance",
            "4G modem and Type-C connectivity",
            "Compatible with Cube A and other surveying software",
            "Support for multiple data formats (shapefiles, DXF, CSV, KML)",
            "Seamless workflow integration capabilities",
            "Stable signal reception in challenging environments",
            "Professional surveying and mapping applications"
        ],
        "specifications": {
            "Model": "S3II/S700",
            "GNSS Features": {
                "Channels": "700",
                "Multi-Constellation": "GPS, GLONASS, Galileo, BeiDou, QZSS, IRNSS",
                "Technology": "RTK technology for centimeter-level accuracy"
            },
            "Connectivity": {
                "Internal Antenna": "GNSS, Bluetooth, and Wi-Fi integration",
                "Operating System": "Linux OS with WEB UI",
                "4G Modem": "Built-in 4G connectivity",
                "Type-C": "Type-C connectivity support"
            },
            "Design": {
                "Protection": "IP67-rated rugged design",
                "Battery": "High-capacity battery for all-day performance",
                "Compatibility": "Cube A and other surveying software"
            },
            "Data Formats": [
                "Shapefiles",
                "DXF",
                "CSV",
                "KML"
            ]
        },
        "price": "₹ 5,61,558 + GST",
        "images": [
            "images/product_images/GNSS/STONEX/S3II S700 GNSS RTK/stonex s311 s700.jpg",
            "images/product_images/GNSS/STONEX/S3II S700 GNSS RTK/stonex s311 s700 images.jpg",
            "images/product_images/GNSS/STONEX/S3II S700 GNSS RTK/stonex s311 s700 img.png"
        ],
        "alt": "STONEX S3II/S700 Advanced GNSS RTK Receiver"
    },
    {
        "brand": "STONEX",
        "model": "S1/T1",
        "product_name": "STONEX S1/T1 - Compact GNSS RTK Receiver",
        "category": "RTK Receiver",
        "description": "The Stonex S1/T1 is a professional GNSS RTK survey receiver offering 800–1408 channels, multi-constellation support (GPS, BDS, Galileo, GLONASS), and advanced inertial navigation for tilt measurement. Equipped with Wi-Fi, cellular, Bluetooth, and radio connectivity, it ensures precise real-time positioning in challenging environments. Its rugged IP68 design and wide operating temperature range make it ideal for topographic surveys, road and power line construction, site leveling, and GIS data collection. Compatible with professional software like SurPAD 4.0, the S1/T1 delivers reliable performance for all surveying tasks.",
        "features": [
            "Professional GNSS RTK survey receiver with 800–1408 channels",
            "Multi-constellation support (GPS, BDS, Galileo, GLONASS)",
            "Advanced inertial navigation for tilt measurement",
            "Wi-Fi, cellular, Bluetooth, and radio connectivity",
            "Precise real-time positioning in challenging environments",
            "Rugged IP68 design for durability",
            "Wide operating temperature range",
            "Ideal for topographic surveys and construction",
            "Road and power line construction applications",
            "Site leveling and GIS data collection",
            "Compatible with professional software like SurPAD 4.0",
            "Reliable performance for all surveying tasks",
            "Compact and lightweight design",
            "Smart, reliable, and easy to use"
        ],
        "specifications": {
            "Model": "S1/T1",
            "GNSS Features": {
                "Channels": "800–1408",
                "Satellite Systems": "GPS, BDS, Galileo, GLONASS",
                "Positioning": "Real-time positioning in challenging environments"
            },
            "Connectivity": {
                "Wi-Fi": "Built-in Wi-Fi connectivity",
                "Cellular": "Cellular connectivity support",
                "Bluetooth": "Bluetooth connectivity",
                "Radio": "Radio connectivity"
            },
            "Navigation": {
                "Inertial Navigation": "Advanced inertial navigation for tilt measurement"
            },
            "Environmental": {
                "Protection": "IP68 design",
                "Operating Temperature": "Wide operating temperature range"
            },
            "Applications": {
                "Surveying": "Topographic surveys, road and power line construction",
                "Data Collection": "Site leveling, GIS data collection",
                "Software": "Compatible with professional software like SurPAD 4.0"
            }
        },
        "price": "₹ 5,53,595",
        "images": [
            "images/product_images/GNSS/STONEX/S1T1 GNSS RTK/stonex s1t1.jpg",
            "images/product_images/GNSS/STONEX/S1T1 GNSS RTK/stonex s1t1img.jpg"
        ],
        "alt": "STONEX S1/T1 Compact GNSS RTK Receiver"
    },
    {
        "brand": "FOIF",
        "model": "A90",
        "product_name": "FOIF A90 - Advanced GNSS RTK Receiver",
        "category": "RTK Receiver",
        "description": "The FOIF A90 GNSS Receiver, powered by the NovAtel OEM729 board, delivers high-precision RTK with 1408 multi-frequency channels supporting all major constellations, including GPS, GLONASS, BDS, Galileo, QZSS, IRNSS, SBAS, and L-Band. Featuring IMU tilt measurement up to 60°, a built-in 1W UHF radio with 6–8 km range, and intelligent dual batteries for 10 hours of work, it ensures accuracy and reliability in the field. With 4G, WiFi, WebUI, 8GB internal memory, and an 8-inch rugged Android tablet preloaded with survey software, the A90 is a lightweight, cable-free, and powerful solution for modern surveying.",
        "features": [
            "Advanced GNSS RTK Receiver with NovAtel OEM729 board",
            "1408 multi-frequency channels for comprehensive satellite tracking",
            "Multi-constellation support (GPS, GLONASS, BDS, Galileo, QZSS, IRNSS, SBAS, L-Band)",
            "IMU tilt measurement up to 60° with fusion positioning",
            "Built-in 1W UHF radio with 6–8 km range",
            "Intelligent dual batteries for extended field operation",
            "4G LTE connectivity with multiple network support",
            "WiFi 802.11 b/g/n and Bluetooth V2.1+EDR/V4.1 Dual",
            "8GB internal memory with expandable MicroSD support",
            "8-inch rugged Android tablet with preloaded survey software",
            "WebUI for remote configuration and monitoring",
            "TTS audio broadcast support",
            "Lightweight, cable-free design for modern surveying",
            "High-precision RTK positioning with fast initialization",
            "Professional surveying solution with comprehensive features"
        ],
        "specifications": {
            "Model": "A90",
            "GNSS Features": {
                "Channels": "1408",
                "Satellite Systems": {
                    "BDS": "B1, B2, B3",
                    "GPS": "L1CA, L1P, L1C, L2P, L2C, L5",
                    "GLONASS": "G1, G2, P1, P2",
                    "GALILEO": "E1BC, E5a, E5b",
                    "QZSS": "L1CA, L2C, L5, L1C",
                    "SBAS": "L1CA, L5",
                    "L-Band": "Support"
                }
            },
            "Accuracy": {
                "Static": {
                    "Horizontal": "2.5 mm ± 1ppm",
                    "Vertical": "5 mm ± 1ppm"
                },
                "RTK": {
                    "Horizontal": "8 mm ± 1ppm",
                    "Vertical": "15 mm ± 1ppm"
                },
                "DGNSS": "< 0.5m",
                "ATLAS": "8cm"
            },
            "System Configuration": {
                "Initialization Time": "8s",
                "Initialization Reliability": "99.90%",
                "Operating System": "Linux",
                "Memory": "8GB, support expandable MicroSD",
                "WiFi": "802.11 b/g/n",
                "Bluetooth": "V2.1+EDR/V4.1 Dual, Class2",
                "E-Bubble": "Support"
            },
            "Tilt Survey": {
                "IMU Tilt Survey": "60°",
                "Fusion Positioning": "400Hz refresh rate"
            },
            "Data Link": {
                "Audio": "Support TTS audio broadcast",
                "UHF": {
                    "Type": "Tx/Rx Internal Radio",
                    "Power": "1W/2W adjustable",
                    "Frequency": "410-470MHz"
                },
                "Protocol": "GeoTalk, SATEL, PCC-GMSK, TrimTalk, TrimMark, SOUTH, hi target",
                "Network": "4G-LTE, TD-SCDMA, CDMA(EVDO 2000), WCDMA, GSM(GPRS)"
            },
            "Physical Characteristics": {
                "Interface": "1×TNC Radio Antenna, 1×5Pin(Power & RS232), 1×7Pin (USB & RS232)",
                "Button": "1 Power Button",
                "Indication Light": "4 Indication Lights",
                "Size": "Φ156mm × H 76mm",
                "Weight": "1.2kg"
            },
            "Power Supply": {
                "Battery Capacity": "7.2V, 24.5Wh (standard two batteries)",
                "Battery Life": {
                    "Static Survey": "15 hours",
                    "Rover RTK Survey": "12 hours"
                },
                "External Power Source": "DC 9-18V, with overvoltage protection"
            },
            "Environmental Characteristics": {
                "Working Temperature": "-35℃ ~ +65℃",
                "Storage Temperature": "-55℃ ~ +80℃",
                "Waterproof & Dustproof": "IP68",
                "Humidity": "100% anti-condensation"
            }
        },
        "price": "₹ 5,43,638 + GST",
        "images": [
            "images/product_images/GNSS/FOIF/A90 GNSS RTK/FOIF A90.jpg",
            "images/product_images/GNSS/FOIF/A90 GNSS RTK/FOIF A90 ALL.jpg",
            "images/product_images/GNSS/FOIF/A90 GNSS RTK/FOIF A90 MIXED.jpg"
        ],
        "alt": "FOIF A90 Advanced GNSS RTK Receiver"
    },
    {
        "brand": "FOIF",
        "model": "F90",
        "product_name": "FOIF F90 Intelligent GNSS Receiver",
        "category": "RTK Receiver",
        "description": "The FOIF F90 GNSS Receiver ensures maximum performance with support for multi-constellation tracking (GPS, GLONASS, Galileo, BeiDou, optional L-Band) and compatibility with Trimble BD990, NovAtel 729, and Hemisphere P328 boards for centimeter-level accuracy. Featuring Bluetooth, Wi-Fi, fast connection, voice-guided power control, and a built-in self-check function, it delivers stable, efficient, and reliable performance for modern surveying. Its rugged design and long-lasting battery make it ideal for demanding field environments, ensuring uninterrupted productivity.",
        "features": [
            "Intelligent GNSS Receiver with H board technology",
            "1408 channels for comprehensive satellite tracking",
            "Multi-constellation support (GPS, GLONASS, BeiDou, Galileo, IRNSS, SBAS, QZSS, L-Band)",
            "Fourth generation Tilt Technology with IMU function",
            "Real-time RTK positioning with centimeter-level accuracy",
            "Bluetooth, Wi-Fi, and fast connection capabilities",
            "Voice-guided power control and built-in self-check function",
            "Rugged design for demanding field environments",
            "Long-lasting battery for uninterrupted productivity",
            "Linux-based operating system with Web UI support",
            "Multi-language voice support",
            "Compatible with Trimble BD990, NovAtel 729, and Hemisphere P328 boards",
            "Professional surveying solution with advanced features",
            "Stable, efficient, and reliable performance",
            "Flat design with aluminum magnesium alloy bottom cover"
        ],
        "specifications": {
            "Model": "F90",
            "GNSS Engine": {
                "Board": "H board",
                "Channels": "1408",
                "Satellite Systems": {
                    "GPS": "L1 C/A, L2E, L2C, L5",
                    "GLONASS": "L1 C/A, L2 C/A, L3 CDMA",
                    "BeiDou": "B1, B2, B3",
                    "Galileo": "E1, E5A, E5B, E5AltBOC, E6",
                    "IRNSS": "L5",
                    "SBAS": "L1C/A, L5",
                    "QZSS": "L1 C/A, L1 SAIF, L1C, L2C, L5, LEX",
                    "MSS L-Band": "OmniSTAR, Trimble RTX"
                },
                "Tilt Survey": "Fourth generation Tilt Technology, IMU function"
            },
            "Real-Time Accuracy (RMS)": {
                "SBAS": {
                    "Horizontal": "60cm (1.97ft)",
                    "Vertical": "120cm (3.94ft)"
                },
                "Real-Time DGPS Position": {
                    "Horizontal": "40cm (1.31ft)",
                    "Vertical": "80cm (2.62ft)"
                },
                "Real-Time Kinematic Position": {
                    "Horizontal": "±(8mm+1ppm)",
                    "Vertical": "±(15mm+1ppm)"
                }
            },
            "Real-Time Performance": {
                "Instant-RTK Initialization": "Typically",
                "Stop and Go Solution": "99.9% reliability",
                "RTK Initialization Range": ">40km"
            },
            "Post Processing Accuracy (RMS)": {
                "Static, Rapid Static": {
                    "Horizontal": "2.5mm (0.008ft) +1.0ppm",
                    "Vertical": "5mm (0.016ft) +1.0ppm"
                },
                "Post-processing Kinematic": {
                    "Horizontal": "10mm (0.033ft) +1.0ppm",
                    "Vertical": "20mm (0.066ft) +1.0ppm"
                }
            },
            "Solutions": {
                "Surpad Software": "Main function include: F90 GNSS Support: configuration, monitoring and control",
                "Field Software Suite": {
                    "Volume Computation": "Supported",
                    "Network Connectivity": "Supported",
                    "Coordinate System Support": "Predefined grid systems, predefined datums, projections, Geoids, local grid",
                    "Map View": "Colored lines",
                    "Geodetic Geometry": "Intersection, azimuth/distance, offsetting, poly-line, curve, area",
                    "Road Construction (3D)": "Supported",
                    "Survey Utilities": "Calculator, RW5 file",
                    "Viewing": "Supported",
                    "Data Import/Export": "DXF, SHP, RW5"
                }
            },
            "Data Logging": {
                "Recording Interval": "0.1-999 seconds"
            },
            "Physical Characteristics": {
                "Design": "Flat design",
                "Size": "156mm × 76mm",
                "Bottom Cover": "Aluminum magnesium alloy",
                "Memory": "8GB standard; supports extending to 32GB"
            },
            "I/O Interface": {
                "TNC Port": "Connecting built-in radio antenna",
                "5-pin Lemo Port": "Connecting external power supply and external radio",
                "7-pin Lemo Port": "(USB+serial port): connecting PC and handheld"
            },
            "System Configuration": {
                "Operating System": "Linux - Based on Linux; Supports Web UI",
                "Voice": "Multi-language supported",
                "Tilt Survey Sensor": "Automatic correct system by 30 degree"
            },
            "Data Format": {
                "Supported Formats": "RTCM 2.3, RTCM 3.0, RTCM 3.X, CMR, CMR+, NovAtelX/5CMRx"
            },
            "Operation": {
                "Modes": "RTK rover/base, post-processing",
                "RTK Network Rover": "VRS, FKP, MAC",
                "Point-to-point GPRS": "Through Real-time Data Server Software (internal GPRS or external cell phone)",
                "LandXML": "FOIF Field Genius support",
                "Total Station Support": "FOIF Field Genius",
                "Import and Stake": "Directly from a DXF File (FOIF Field Genius)"
            },
            "Office Software": {
                "Main Functions": [
                    "Network post-processing",
                    "Integrated transformation and grid system computations",
                    "Pre-defined datums along with user-defined capabilities",
                    "Survey mission planning",
                    "Automatic vector processing",
                    "Least-squares network adjustment",
                    "Data analysis and quality control tools",
                    "Coordinate transformations",
                    "Reporting",
                    "Exporting",
                    "Geoid"
                ]
            },
            "Environmental Characteristics": {
                "Operating Temperature": "-30℃ to +65℃ (-22°F to 149°F)",
                "Storage Temperature": "-40℃ to +80℃ (-40°F to 176°F)",
                "Humidity": "100% condensing",
                "Waterproof": "IP67 (IEC60529)",
                "Shock": "2m (6.56ft) pole drop, 1.2m (3.94ft) free drop"
            },
            "Power": {
                "Battery": "7.2V, 2 removable batteries (total up to 6800mAh, supports single battery working)"
            },
            "Optional System Components": {
                "Communication Module": {
                    "Internal Radio": "UHF Link (410-470MHz), 1W",
                    "External Radio": "R*&*both (5w/35w selectable)",
                    "4G LTE Module": "EC25 series - Fits various networks",
                    "Bluetooth": "2.1+EDR Class 2",
                    "WiFi": "IEEE 802.11 b/g/n"
                },
                "Antenna": "Built-in antenna, integrating GNSS, BT/WLAN and network antenna",
                "Controller": "F58"
            }
        },
        "price": "₹ 7,04,929 + GST",
        "images": [
            "images/product_images/GNSS/FOIF/F90 GNSS RTK/FOIF F90.jpg",
            "images/product_images/GNSS/FOIF/F90 GNSS RTK/FOIF F90 MAIN.jpg",
            "images/product_images/GNSS/FOIF/F90 GNSS RTK/FOIF F90 IMG.jpg",
            "images/product_images/GNSS/FOIF/F90 GNSS RTK/FOIF F90 DETAILED.jpg"
        ],
        "alt": "FOIF F90 Intelligent GNSS Receiver"
    },
    {
        "brand": "FOIF",
        "model": "A60 PRO",
        "product_name": "FOIF A60 PRO - Advanced GNSS RTK Receiver",
        "category": "RTK Receiver",
        "description": "The FOIF A60 Pro GNSS Receiver redefines precision surveying with 800 channels and support for Beidou-3, ensuring strong satellite connectivity and reliability. Built on a Linux system with WebUI settings, it combines power with user-friendly operation in a lightweight magnesium alloy body. Its four-in-one antenna integrates GNSS, Bluetooth, WiFi, and 4G for seamless communication, while a built-in eSIM with three years of free data enables effortless network operation. Featuring calibration-free tilt measurement technology, multi-color LED status lights, and a large-capacity battery with Type-C fast charging, this receiver delivers unmatched efficiency, durability, and performance in the field.",
        "features": [
            "Advanced GNSS RTK Receiver with 800 channels",
            "Multi-constellation support (GPS, BDS, GLONASS, Galileo, QZSS, SBAS, L-Band)",
            "Beidou-3 support for enhanced satellite connectivity",
            "Linux+A7 operating system with WebUI settings",
            "Built-in eSIM with 3 years free data",
            "Dual SIM card slot with embedded eSIM",
            "4G LTE full network compatibility",
            "Bluetooth V5.0+EDR with BLE support",
            "WiFi 802.11 b/g/n connectivity",
            "TRM101 radio 410-470MHz",
            "RTKFusion tilt measurement technology",
            "Smart touch screen controller",
            "Type-C port for charging and data transmission",
            "5 Pin port for external power and radio",
            "Multi-color LED status indicators",
            "IP67 waterproof and dustproof rating",
            "Built-in 6800mAh dual battery system",
            "Voice support and audio feedback",
            "8GB internal memory",
            "Calibration-free tilt measurement",
            "Lightweight magnesium alloy construction"
        ],
        "specifications": {
            "Model": "A60 PRO",
            "GNSS Features": {
                "Channels": "800",
                "Update Rate": "10Hz standard, 20Hz optional",
                "Satellite Systems": {
                    "GPS": "L1 C/A, L1P, L1C, L2C, L2P, L5",
                    "BDS": "B1I, B2I, B3I, B1C, B2a, B2b, ACEBOC",
                    "GLONASS": "G1, G2, G3",
                    "GALILEO": "E1, E5a, E5b, ALTBOC, E6",
                    "QZSS": "L1C/A, L1C, L2C, L5, LEX",
                    "SBAS": "L1, L5",
                    "L-Band": "Optional"
                }
            },
            "Accuracy": {
                "Static": {
                    "Horizontal": "±(2.5+0.5×10⁻⁶D)mm",
                    "Vertical": "±(5+0.5×10⁻⁶D)mm"
                },
                "RTK": {
                    "Horizontal": "±(8+1×10⁻⁶D)mm",
                    "Vertical": "±(15+1×10⁻⁶D)mm"
                },
                "RTKFusion": {
                    "30° bar tip": "within 2cm (1.8m bar height)",
                    "60° bar tip": "within 5cm (1.8m bar height)"
                }
            },
            "Power Supply": {
                "Battery": "Built-in battery, 4.2V, 6800mAh×2",
                "Working Duration": "10 hours (rover)",
                "Input Voltage": "9~28V DC"
            },
            "System": {
                "Operating System": "Linux+A7",
                "Memory": "8GB, no TF card slot",
                "Bluetooth": "V5.0+EDR, downward compatibility/ BLE",
                "WiFi": "802.11 b/g/n",
                "Network": "Full Netcom 4G with multiple band support"
            },
            "Network Bands": {
                "LTE FDD": "B1/B3/B5/B8",
                "LTE TDD": "B34/B38/B39/B40/B41",
                "WCDMA": "B1/B8",
                "TD-SCDMA": "B34/B39",
                "CDMA": "BC0",
                "GSM": "900/1800MHz"
            },
            "Radio": {
                "Type": "TRM101",
                "Frequency": "410-470MHz"
            },
            "Data Link": {
                "TNC": "Used to connect inner radio antenna",
                "Type-C Port": "Used for charge and data transmission",
                "5 Pin Port": "Used to connect external power and external radio"
            },
            "SIM Card": {
                "eSIM": "Embedded, no need to insert a card",
                "SIM Card Slot": "Dual-card slot compatible design",
                "Default Behavior": "SIM card takes priority over eSIM"
            },
            "Physical": {
                "Size": "148mm × 74.5mm",
                "Weight": "1.0kg",
                "Voice": "Support",
                "Screen": "Smart Touch Screen, works as a controller"
            },
            "Power Control": {
                "Turn On": "Long press for 3 seconds",
                "Turn Off": "Long press for 3 seconds",
                "Status Broadcast": "Short press once",
                "Battery Indicators": "4 LED indicators with 5s display"
            },
            "LED Status Lights": {
                "Red Always Bright": "Self-check fault",
                "Red Breathing": "Charge less than 25%",
                "Red Flash": "Abnormal communication on board card",
                "Green 5S": "Data records (static, base station, mobile station)",
                "Purple Always Bright": "Fixed solution",
                "Purple Blink": "Data link receiving and sending",
                "Purple Breathing": "Single point, successful positioning",
                "Purple Flash": "Not positioned",
                "Purple to Blue": "Bluetooth connected",
                "Yellow Boot": "System starting",
                "Yellow Flicker": "Self check",
                "Yellow Breath": "Firmware upgrading",
                "Red-Green-Blue Cycle": "Built-in module upgrade"
            },
            "Battery Indicators": {
                "75-100%": "4 lights all bright, green always bright",
                "50-75%": "3 lights on, green light",
                "25-50%": "2 lights on, green light always on",
                "Below 25%": "1 light on, green light always on"
            },
            "Environment": {
                "Working Temperature": "-30℃ ~ +65℃",
                "Storage Temperature": "-40℃ ~ +80℃",
                "Drop Resistance": "2m fall with pole (hardwood ground), 1.2m free fall",
                "Waterproof & Dustproof": "IP67",
                "Humidity": "Anti-condensation 100%"
            }
        },
        "price": "₹ 7,58,693 + GST",
        "images": [
            "images/product_images/GNSS/FOIF/A60 PRO GNSS RTK/FOIF A60 PRO.jpg"
        ],
        "alt": "FOIF A60 PRO Advanced GNSS RTK Receiver"
    },
    {
        "brand": "FOIF",
        "model": "A70 AR",
        "product_name": "FOIF A70 AR - Advanced GNSS RTK Receiver with AR Technology",
        "category": "RTK Receiver",
        "description": "The FOIF A70 AR GNSS Receiver delivers next-level precision with a full-constellation board supporting five satellites and 21 frequencies, including Beidou-3. Its fourth-generation inertial tilt technology with 6-axis 400Hz output ensures calibration-free accuracy, while AR live stakeout fuses satellite, inertial, and visual algorithms for interference-free results. With an 88° wide viewing angle, dual AR integration, and a UHF omnidirectional radio offering full-frequency compatibility, the A70 AR sets a new standard for powerful and intuitive fieldwork.",
        "features": [
            "Advanced GNSS RTK Receiver with 1408 channels",
            "Full-constellation board supporting five satellites and 21 frequencies",
            "Beidou-3 support for enhanced satellite connectivity",
            "Fourth-generation inertial tilt measurement technology",
            "6-axis 400Hz output for calibration-free accuracy",
            "AR live stakeout with satellite, inertial, and visual algorithm fusion",
            "88° wide viewing angle for comprehensive field coverage",
            "Dual AR integration for enhanced positioning",
            "Built-in Bluetooth V2.1+EDR/V4.1 dual mode",
            "Automatic Bluetooth search and connection within 5 seconds",
            "WiFi connectivity with direct controller connection",
            "Web UI support for wireless management",
            "Built-in full-band UHF radio with omnidirectional coverage",
            "Multi-protocol radio compatibility",
            "Built-in lithium battery 7.2V/6900mAh",
            "Voice real-time broadcast work status",
            "LED indicator with mixed multi-color breathing light",
            "One-click battery level check",
            "TNC and Type-C interfaces",
            "Magnesium alloy construction with polymer plastic top cover",
            "2MP camera with 25Hz frame rate",
            "Low light level high sensitivity imaging",
            "1-3cm lofting accuracy"
        ],
        "specifications": {
            "Model": "A70 AR",
            "GNSS Features": {
                "Channels": "1408 channels",
                "Satellite Systems": {
                    "BDS": "B1I/B2I/B3I/B1C/B2a/B2b",
                    "GPS": "L1C/A/L1C/L2P(Y)/L2C/L5",
                    "GLONASS": "G1/G2/G3",
                    "GALILEO": "E1/E5a/E5b/E6",
                    "QZSS": "L1/L2/L5"
                }
            },
            "Performance Index": {
                "Static Measurement": {
                    "Plane Accuracy": "±(2.5mm+0.5ppm)RMS",
                    "Elevation Accuracy": "±(5mm+0.5ppm)RMS"
                },
                "RTK Measurement": {
                    "Plane Accuracy": "±(8mm+1ppm)RMS",
                    "Elevation Accuracy": "±(15mm+1ppm)RMS"
                },
                "SBAS Positioning": "0.5m (typical)",
                "Initialization Time": "<10s",
                "Initialization Reliability": ">99.9%"
            },
            "Wireless Communication": {
                "Bluetooth": "Built-in, V2.1+EDR/V4.1 dual mode, automatically search for Bluetooth and connect within 5 seconds",
                "WiFi": "Can connect to the Controller directly through WiFi, instead of Bluetooth connection, and supports Web UI",
                "Wireless Management": "Host upgrade, data download, parameter setting, station operation, etc",
                "UHF Radio": "Built-in full-band receiving radio, all-direction, multi-protocol"
            },
            "Physical Properties": {
                "Dimensions": "152mm × 92mm",
                "Material": "Magnesium alloy lower cover and polymer plastic top cover",
                "Battery": "Built-in lithium battery, 7.2V/6900mAh",
                "Input Voltage": "9~28V DC",
                "Voice": "Voice real-time broadcast work status",
                "Data Interfaces": "TNC interface, Type-C interface, 1 button",
                "Auxiliary Function": "Fourth generation tilt measurement technology",
                "Human-Machine Interaction": "LED indicator, one-click to check the battery level, mixed multi-color breathing light, show the working status of the host"
            },
            "Image Parameters": {
                "Pixel": "2MP",
                "Number of Frames": "25Hz",
                "Viewing Angle": "FOV 88 degrees",
                "Sensitivity": "Low light level high sensitivity",
                "Lofting Accuracy": "1-3cm"
            },
            "AR Technology": {
                "AR Live Stakeout": "Fuses satellite, inertial, and visual algorithms for interference-free results",
                "Dual AR Integration": "Enhanced positioning capabilities",
                "Wide Viewing Angle": "88° comprehensive field coverage",
                "Visual Algorithm Fusion": "Combines multiple positioning technologies"
            },
            "Tilt Measurement": {
                "Technology": "Fourth-generation inertial tilt measurement technology",
                "Output": "6-axis 400Hz output",
                "Calibration": "Calibration-free accuracy",
                "Performance": "Enhanced precision for field operations"
            }
        },
        "price": "2,63,872 + GST",
        "images": [
            "images/product_images/GNSS/FOIF/A70 AR GNSS RTK/FOIF A70 AR.jpg",
            "images/product_images/GNSS/FOIF/A70 AR GNSS RTK/FOIF A70 AR IMAGE.jpg",
            "images/product_images/GNSS/FOIF/A70 AR GNSS RTK/FOIF A70 AR SIDE.jpg",
            "images/product_images/GNSS/FOIF/A70 AR GNSS RTK/FOIF A70 AR TOPVIEW.jpg"
        ],
        "alt": "FOIF A70 AR Advanced GNSS RTK Receiver with AR Technology"
    },
    {
        "brand": "FOIF",
        "model": "N90",
        "product_name": "FOIF N90 - Next-Gen GNSS RTK Receiver",
        "category": "RTK Receiver",
        "description": "The FOIF N90/F90 GNSS RTK Receiver is a high-accuracy, dual-frequency solution for professional surveying and mapping. Powered by a NovAtel OEM729 engine with 555 channels, it supports GPS, GLONASS, Galileo, BeiDou, SBAS, and optional L-Band for precise positioning. Its IMU with tilt compensation ensures accurate results even when the pole is tilted, while Wi-Fi with WebUI control and bundled Surpad field software simplify fieldwork. Built with an IP67-rated body and dual hot-swappable batteries providing up to 12 hours of use, the N90/F90 is compact, durable, and ideal for surveying, construction, GIS, and road design.",
        "features": [
            "Next-Gen GNSS RTK Receiver with powerful performance",
            "NovAtel OEM729 engine with 555 channels",
            "Multi-constellation support (GPS, GLONASS, Galileo, BeiDou, SBAS)",
            "Optional L-Band for enhanced positioning accuracy",
            "IMU with tilt compensation for accurate results when pole is tilted",
            "Wi-Fi connectivity with WebUI control",
            "Bundled Surpad field software for simplified fieldwork",
            "IP67-rated body for durability in harsh environments",
            "Dual hot-swappable batteries for up to 12 hours of use",
            "Compact and lightweight design for field portability",
            "Ideal for surveying, construction, GIS, and road design",
            "Faster initialization and enhanced stability",
            "Seamless connectivity for modern surveying needs",
            "Precise and reliable performance in the field"
        ],
        "specifications": {
            "Model": "N90",
            "GNSS Engine": "NovAtel OEM729",
            "Channels": "555",
            "Satellite Systems": {
                "GPS": "L1, L2, L5",
                "GLONASS": "L1, L2",
                "GALILEO": "E1, E5a, E5b",
                "BEIDOU": "B1, B2, B3",
                "SBAS": "L1, L5",
                "L-Band": "Optional"
            },
            "IMU": "Built-in IMU with tilt compensation",
            "Connectivity": {
                "Wi-Fi": "Built-in Wi-Fi with WebUI control",
                "Software": "Bundled Surpad field software"
            },
            "Power Supply": {
                "Battery": "Dual hot-swappable batteries",
                "Operating Time": "Up to 12 hours of use"
            },
            "Environmental": {
                "Protection": "IP67-rated body",
                "Design": "Compact and durable"
            },
            "Applications": "Surveying, construction, GIS, road design"
        },
        "price": "₹ 5,61,560 + GST",
        "images": [
            "images/product_images/GNSS/FOIF/N90 GNSS RTK/FOIF N90.jpg",
            "images/product_images/GNSS/FOIF/N90 GNSS RTK/FOIF N90 SIDE.jpg",
            "images/product_images/GNSS/FOIF/N90 GNSS RTK/FOIF N90 IMAGE.jpg",
            "images/product_images/GNSS/FOIF/N90 GNSS RTK/FOIF N90 IMG.jpg"
        ],
        "alt": "FOIF N90 Next-Gen GNSS RTK Receiver"
    },
    {
        "brand": "Ruide",
        "model": "RTS-822R4",
        "product_name": "Ruide RTS-822R4 - Reliable Accuracy Total Station",
        "category": "Total Station",
        "description": "Ruide RTS total stations are advanced surveying instruments designed for land surveys, topographic mapping, and construction projects, offering precision angle measurement and long-range reflectorless EDM. The RTS-822R4 features non-prism ranges up to 400m, angle accuracy of 2″, and rugged protection for harsh environments. With options like color touch screens, Windows or Android operating systems, robotic capabilities for single-operator work, and internal memory for up to 20,000 points, Ruide RTS instruments combine accuracy, durability, and ease of use for professional surveyors.",
        "features": [
            "Advanced surveying instrument for land surveys and topographic mapping",
            "Precision angle measurement with 2″ accuracy",
            "Long-range reflectorless EDM up to 400m non-prism",
            "Single prism range up to 4000m",
            "30X magnification telescope with erect image",
            "Graphic LCD 160×90 dots display with white backlight",
            "Dual-axis tilt correction with liquid electric method",
            "Internal memory for >10,000 points or >20,000 coordinates",
            "Multiple data interfaces: RS232/SD-card/Mini-USB",
            "Rechargeable Li-ion battery 3000mAh with 16h working time",
            "Rugged construction for harsh environments",
            "Alphanumeric keyboard for easy data entry",
            "Absolute encoding system for reliable measurements",
            "Automatic meteorological correction (ATMOSense)",
            "Optional internal laser plummet",
            "Professional surveying solution with comprehensive features"
        ],
        "specifications": {
            "Model": "RTS-822R4",
            "Telescope": {
                "Length": "154mm",
                "Objective Lens Diameter": "Telescope: 45mm, Distance meter: 50mm",
                "Magnification": "30X",
                "Image": "Erect",
                "Field of View": "1°30″",
                "Resolving Power": "3″",
                "Minimum Focus": "1.0m"
            },
            "Distance Measurement": {
                "Single Prism": "4000m",
                "Non-Prism": "400m",
                "Accuracy - Prism Mode": "±(2mm+2ppm×D)m.s.e.",
                "Accuracy - Non-Prism Mode": "±(3mm+2ppm×D)m.s.e.",
                "Measuring Time": "Fine: 0.7s, Normal: 0.5s",
                "Meteorologic Correction": "ATMOSense (Auto Sensing)",
                "Prism Constant": "Manual Input"
            },
            "Angle Measurement": {
                "Method": "Absolute Encoding",
                "Detecting System": "H: 2 sides, V: 2 sides",
                "Minimum Reading": "1″/5″",
                "Accuracy": "2″",
                "Diameter of Circle": "79mm",
                "Vertical Angle": "0° Zenith 0°/Horizontal: 0°",
                "Unit": "360°/400gon/6400mil"
            },
            "Display": {
                "Display Unit": "Graphic LCD 160×90 Dots with White Backlight",
                "Number of Units": "2 sides",
                "Keyboard": "Alphanumeric Key"
            },
            "Tilt Correction": {
                "Tilt Sensor": "Dual Axis",
                "Method": "Liquid Electric",
                "Range": "±4′",
                "Setting Unit": "1″"
            },
            "Level Sensitivity": {
                "Plate Level": "30″/2mm",
                "Circular Level": "8′/2mm"
            },
            "Optical Plummet": {
                "Type": "Optional: Internal Laser Plummet",
                "Image": "Erect",
                "Magnification": "3X",
                "Focusing Range": "0.3m~∞",
                "Field of View": "5°"
            },
            "Data Storage & Interface": {
                "Internal Memory": ">10,000 points or >20,000 coordinates",
                "Data Interface": "RS 232/SD-card/Mini-USB"
            },
            "General": {
                "Guide Light": "No",
                "Weight & Dimension": "5.4kg, 340mm(H)×160mm(W)×150mm(L)",
                "Working Temperature": "–20°C~+50°C",
                "Battery Type": "Rechargeable Li-ion Battery 3000mAh",
                "Battery Voltage": "DC 7.4V",
                "Working Time": "16h"
            }
        },
        "price": "2,84,775 + GST",
        "images": [
            "images/product_images/total station/Ruide/RCS/RUIDE RCS FRONT.jpg",
            "images/product_images/total station/Ruide/RCS/RUIDE RCS IMAGE.jpg",
            "images/product_images/total station/Ruide/RCS/RUIDE RCS IMAGES.jpg",
            "images/product_images/total station/Ruide/RCS/RUIDE RCS IMG.jpg"
        ],
        "alt": "Ruide RTS-822R4 Reliable Accuracy Total Station"
    },
    {
        "brand": "FOIF",
        "model": "RTS 102 R10",
        "product_name": "FOIF RTS 102 R10 - Professional Total Station",
        "category": "Total Station",
        "description": "The FOIF RTS 102 R10 is a professional total station for land surveying, delivering 2\" angular accuracy and a 1000m reflectorless EDM. With a 5000m prism range, 30x magnification telescope, and dual-axis compensator, it ensures reliable performance. Its large internal memory stores up to 120,000 points and supports SD cards up to 16GB for flexible data management. Featuring an alphanumeric dual-side keyboard with LCD display, it provides a user-friendly interface. Built with IP66 water and dust protection, optional Bluetooth, and a lightweight 5.1kg design, it is durable and portable. A long-lasting battery provides up to 26 hours of continuous operation, making it dependable for accurate surveying.",
        "features": [
            "Professional total station for land surveying",
            "2\" angular accuracy for precise measurements",
            "1000m reflectorless EDM capability",
            "5000m prism range for long-distance measurements",
            "30x magnification telescope with erect image",
            "Dual-axis compensator for reliable performance",
            "Large internal memory stores up to 120,000 points",
            "SD card support up to 16GB for flexible data management",
            "Alphanumeric dual-side keyboard with LCD display",
            "User-friendly interface with 6 lines × 20 characters display",
            "IP66 water and dust protection for harsh environments",
            "Optional Bluetooth connectivity",
            "Lightweight 5.1kg design for portability",
            "Long-lasting battery provides up to 26 hours operation",
            "32-bit CPU for enhanced processing power",
            "Laser plummet with adjustable brightness",
            "Optional optical plummet for precise centering",
            "USB/RS-232C/Bluetooth communication interfaces",
            "FOIF Geomatics Office (FGO) data transfer software",
            "Optional F58 data collector with fully rugged PDA"
        ],
        "specifications": {
            "Model": "RTS 102 R10",
            "Angle Measurement": {
                "Reading System": "Absolute Encoder",
                "Angle Unit": "1\"",
                "Display Resolution": "1\"/5\"/10\"",
                "Accuracy": "2\" 5\""
            },
            "Telescope": {
                "Magnification": "30X",
                "Field of View": "1°30'",
                "Minimum Focusing Distance": "1.0m",
                "Length": "156mm",
                "Image": "Erect",
                "Objective Aperture": "45mm"
            },
            "Compensator": {
                "Type": "Dual-axis",
                "Range": "±3'",
                "Accuracy": "1\""
            },
            "Distance Measurement (with Reflector)": {
                "Single Prism": "1 to 5000m",
                "Reflective Sheet /RP60": "800m",
                "Accuracy": "2mm+2ppm",
                "Measuring Time": "1s/0.5s"
            },
            "Distance Measurement (Reflectorless)": {
                "Reflectorless Range R600": "600m",
                "Reflectorless Range R1000": "1000m",
                "Accuracy": "3mm+2ppm",
                "Measuring Time": "1.5s-5s, Max. 20s"
            },
            "Communication": {
                "Memory": "Approx. 120,000 points, support SD card (max. 16GB)",
                "Interface": "USB/RS-232C/Bluetooth (factory optional)",
                "Data Transfer Software": "FOIF Geomatics Office (FGO)",
                "Data Collector": "F58, fully rugged PDA (optional)"
            },
            "Operation": {
                "Dimensions": "175×178×340mm",
                "Weight (including batteries)": "5.1kg",
                "Display": "LCD, 6 lines × 20 characters (96×160 dots)",
                "Keyboard": "2 sides Alphanumerical key board",
                "CPU": "32Bit"
            },
            "Laser Plummet": {
                "Laser Class": "Class 2/ IEC60825-1",
                "Accuracy": "1mm/1.5m",
                "Laser Spot Brightness": "Adjustable",
                "Laser Wave Length": "635nm"
            },
            "Optical Plummet (factory optional)": {
                "Accuracy": "0.8mm / 1.5m",
                "Image": "Erect",
                "Magnification / Field of View": "3x/4",
                "Focus Range": "0.5m to infinite"
            },
            "Environmental": {
                "Operating Temperature": "-20ºC to +50ºC (-4°F to +122°F)",
                "Storage Temperature": "-40ºC to +70ºC (-40°F to 158°F)",
                "Temperature & Pressure": "Manual input",
                "Dust & Waterproof (IEC60529 standard)": "IP66"
            },
            "Power Supply": {
                "Battery Type": "3400mAh Li-ion Rechargeable",
                "Output Voltage/ Capacity": "7.4V (DC)",
                "Operating Time": "Approx. 26 hours (at +20°C) (single distance measurement every 30 seconds)",
                "Charger": "EDJ6-LI (100V/240V)",
                "Charging Time": "Approx. 4 hours"
            }
        },
        "price": "₹ 2,31,012 + GST",
        "images": [
            "images/product_images/total station/FOIF/RTS 102 R10/FOIF RTS 102R10.jpg",
            "images/product_images/total station/FOIF/RTS 102 R10/FOIF RTS 102R10 IMG.jpg",
            "images/product_images/total station/FOIF/RTS 102 R10/FOIF RTS 102R10 IMGS.jpg"
        ],
        "alt": "FOIF RTS 102 R10 Professional Total Station"
    },
    {
        "brand": "FOIF",
        "model": "RTS 112 R10+",
        "product_name": "FOIF RTS 112 R10+ - Accuracy Made Simple",
        "category": "Total Station",
        "description": "The FOIF RTS112SR10+ is a high-precision reflectorless total station with dual-axis compensation and a reflectorless range of up to 600m. With an IP66 rating, it is dustproof and waterproof, ensuring reliability in harsh field conditions. It runs on a long-lasting battery providing up to 12 hours of continuous use. The device supports large memory storage of 120,000 points with SD card compatibility. An alphanumeric keyboard and dual OLED screens make operation smooth and efficient. Versatile connectivity options like USB, SD card, RS-232C, and optional Bluetooth enhance modern surveying workflows.",
        "features": [
            "High-precision reflectorless total station",
            "Dual-axis compensation for reliable measurements",
            "Reflectorless range up to 600m",
            "IP66 rating for dustproof and waterproof protection",
            "Long-lasting battery providing up to 12 hours continuous use",
            "Large memory storage of 120,000 points",
            "SD card compatibility for flexible data management",
            "Alphanumeric keyboard for easy operation",
            "Dual OLED screens for efficient operation",
            "Versatile connectivity options: USB, SD card, RS-232C",
            "Optional Bluetooth connectivity",
            "30X magnification telescope with positive field of view",
            "1°30' field of view for comprehensive coverage",
            "Absolute coding angle measurement method",
            "2\" angle measurement accuracy",
            "±(2mm+2×10⁻⁶·D) ranging precision",
            "Multiple measuring distances: 1000m prism-free, 1200m reflector, 6000m single prism",
            "Fine test capability in 0.5 seconds",
            "±3' compensation range",
            "7.4V DC rechargeable lithium-ion battery",
            "45 hours continuous angle measurement operation",
            "Professional surveying solution with modern features"
        ],
        "specifications": {
            "Model": "RTS 112 R10+",
            "Telescope": {
                "Image": "Positive field of view: 1°30'",
                "Objective Effective Aperture": "Φ50mm",
                "Resolution": "3\"",
                "Magnification": "30X",
                "Minimum Viewing Distance": "1.0m"
            },
            "Ranging": {
                "Precision": "±(2mm+2×10⁻⁶·D)",
                "Measuring Distance": {
                    "Prism-free": "1000m",
                    "Reflector": "1200m",
                    "Single Prism": "6000m"
                },
                "Fine Test": "0.5s"
            },
            "Angle Measurement": {
                "Method": "Absolute coding",
                "Accuracy": "2\"",
                "Minimum Reading": "1\"/5\""
            },
            "Compensator": {
                "Compensation Range": "±3'"
            },
            "Power Supply": {
                "Operating Voltage": "7.4V DC (rechargeable lithium-ion battery)",
                "Working Time": {
                    "Continuous Angle measurement and ranging": "About 12 hours",
                    "Continuous Angle measurement": "About 45 hours"
                }
            },
            "Others": {
                "Communication": "RS-232C/USB/SD card/Bluetooth (optional)",
                "Memory": "120,000 points",
                "Waterproof, Dustproof": "IP66"
            }
        },
        "images": [
            "images/product_images/total station/FOIF/RTS 112 R10+/foif rts 112 r10+.jpg",
            "images/product_images/total station/FOIF/RTS 112 R10+/foif rts 112 r10+ img.jpg",
            "images/product_images/total station/FOIF/RTS 112 R10+/foif rts 112r10.jpg",
            "images/product_images/total station/FOIF/RTS 112 R10+/foif rts 112r10.png"
        ],
        "alt": "FOIF RTS 112 R10+ Accuracy Made Simple Total Station"
    },
    {
        "brand": "FOIF",
        "model": "RTS 352",
        "product_name": "FOIF RTS 352 - Precision Meets Performance",
        "category": "Total Station",
        "description": "The FOIF RTS 352 is a Windows CE-based total station designed for land surveying, equipped with a 3.5-inch sunlight-readable color TFT LCD touch screen. It offers reflectorless measuring capabilities of up to 600m (R600) or 1000m (R1000), making it highly versatile in the field. The instrument comes with onboard professional software such as FOIF Fieldgenius or Carlson SurvCE for efficient data handling. Its illuminated keyboard with an automatic light sensor ensures ease of use in dark conditions. Connectivity options include USB (host/slave), RS-232C, and Bluetooth for flexible data transfer. Additional features include a smart battery management system, built-in temperature and pressure sensors, a guide light system for quick stake-outs, and IP54-rated dust and water resistance.",
        "features": [
            "Windows CE-based total station for land surveying",
            "3.5-inch sunlight-readable color TFT LCD touch screen",
            "Reflectorless measuring capabilities up to 600m (R600) or 1000m (R1000)",
            "Onboard professional software: FOIF Fieldgenius or Carlson SurvCE",
            "Illuminated keyboard with automatic light sensor",
            "USB (host/slave), RS-232C, and Bluetooth connectivity",
            "Smart battery management system",
            "Built-in temperature and pressure sensors",
            "Guide light system for quick stake-outs",
            "IP54-rated dust and water resistance",
            "30X magnification telescope with erect image",
            "1°30' field of view for comprehensive coverage",
            "Absolute encoder reading system",
            "2\" angular surveying accuracy",
            "Multiple measurement ranges: reflectorless, reflective sheet, single prism",
            "Dual axis compensator with ±3' working range",
            "Laser plummet with adjustable brightness",
            "Optional optical plummet for precise centering",
            "ARM Cortex A8 CPU for enhanced performance",
            "4GB internal memory for data storage",
            "Comprehensive application programs for surveying tasks",
            "Professional data transfer and processing software"
        ],
        "specifications": {
            "Model": "RTS 352",
            "Telescope": {
                "Length/Image": "156mm/Erect",
                "Objective Aperture": "φ45mm",
                "Magnification": "30x",
                "Field of View": "1°30′",
                "Shortest Focus Distance": "1.0m"
            },
            "Angle Measurement": {
                "Reading System": "Absolute encoder",
                "Angle Unit": "360°/400gon/6400mil, selectable",
                "Angular Surveying Accuracy": "1\"",
                "Display Resolution": "0.1″/0.5″/1″(or 0.02mgon/0.1mgon/0.2mgon)",
                "Accuracy": "2\""
            },
            "Distance Measurement (R600)": {
                "Display Resolution": "0.1mm/1mm (m/inch selectable)",
                "Laser Class": {
                    "Prism": "Class 1",
                    "Reflectorless/Reflective sheet": "Class 3R"
                }
            },
            "Measurement Range (Good Condition)": {
                "Reflectorless": "1 to 600m",
                "Reflective sheet/RP60": "1 to 800m",
                "Single Prism": "1 to 5000m"
            },
            "Accuracy": {
                "Prism": "2mm+2ppm",
                "Reflective sheet/RP60": "3mm+2ppm",
                "Reflectorless": {
                    "1-150m": "3mm+2ppm",
                    "150-300m": "5mm+3ppm",
                    ">300m": "10mm+5ppm"
                }
            },
            "Measuring Time": {
                "Initial": "2s",
                "Prism": "Typ. 1.0-1.5s",
                "Reflective sheet/RP60": "Typ. 1.5s",
                "Reflectorless": "Typ. 1.5-5s, max. 20s"
            },
            "Level Vial Sensitivity": {
                "Plate Level Vial": "30″/2mm",
                "Circular Level Vial": "8′/2mm"
            },
            "Compensator": {
                "Type": "Dual axis compensator",
                "Working Range": "±3′",
                "Setting Accuracy": "1″"
            },
            "Laser Plummet (Standard)": {
                "Accuracy": "±1.0mm/1.5m",
                "Laser Class": "Class 2/IEC60825-1",
                "Laser Brightness": "Adjustable",
                "Laser Wave Length": "635nm"
            },
            "Optical Plummet (Factory Optional)": {
                "Accuracy": "±0.8mm/1.5m",
                "Image": "Erect",
                "Magnification": "3x",
                "Field of View": "4°",
                "Focus Range": "0.5m to ∞"
            },
            "Display": {
                "Type": "3.5\" colour TFT LCD (320 x 240 dots) touch screen",
                "Features": "Transflective sunlight readable display"
            },
            "Power": {
                "Battery": "3400mAh Li-ion Rechargeable",
                "Output Voltage": "7.4V DC",
                "Continuous Operation Time": "8 hours",
                "Charger": "FDJ6-LI (100V/240V)",
                "Charging Time (at +20ºC)": "Approx. 4 hours"
            },
            "Application Programs": [
                "Data collection/Stake out/Resection/REM/MLM/Point to line",
                "AREA/Z coordinate/OFFset/3D Road/Traverse adjustment",
                "Tape measurement/section/Axis positioning measurement"
            ],
            "Others": {
                "CPU": "ARM Cortex A8",
                "Memory": "4GB internal memory",
                "Sensors": "Built-in temperature and pressure sensors",
                "Keyboard": "Alphanumerical illuminated key board, both sides",
                "Guide Light System": "Factory optional",
                "Weight (including batteries)": "5.5kg",
                "Dimensions (WxDxH)": "185x220x360mm",
                "Interface": "USB host/USB slave/RS-232C/Bluetooth (Optional)",
                "Water and Dust Protection": "IP55 (IEC60529)",
                "Data Transfer & Processing Software": "FOIF Geomatics Office (FGO)",
                "Data Collector": "F58, fully rugged PDA (Optional)"
            }
        },
        "price": "2,21,055 + GST",
        "images": [
            "images/product_images/total station/FOIF/RTS 352/FOIF RTS 352.png",
            "images/product_images/total station/FOIF/RTS 352/FOIF RTS 352 IMAGES.png",
            "images/product_images/total station/FOIF/RTS 352/FOIF RTS 352 IMG.png"
        ],
        "alt": "FOIF RTS 352 Precision Meets Performance Total Station"
    },
    {
        "brand": "FOIF",
        "model": "RTS-342",
        "product_name": "FOIF RTS-342 - Reliable Accuracy, Simplified",
        "category": "Total Station",
        "description": "The FOIF RTS 342 is an advanced total station for precise surveying and construction, offering 2\" angle accuracy, long prism-free EDM ranges, and a user-friendly interface with a color display and LED-backlit keyboard. Built with durable, water-resistant materials (IP55), it ensures reliability in tough environments. Modern variants like the RTS342N integrate Android OS, Bluetooth connectivity, and powerful processors for efficient data handling and seamless workflows. Equipped with a laser pointer for target aiming, robust memory, and customizable options, the RTS 342 suits land surveying, topographic mapping, construction layout, and geodetic engineering. FOIF also provides OEM/ODM customization and a one-year warranty, ensuring flexibility and long-term performance.",
        "features": [
            "Advanced total station for precise surveying and construction",
            "2\" angle accuracy for reliable measurements",
            "Long prism-free EDM ranges for versatile applications",
            "User-friendly interface with color display and LED-backlit keyboard",
            "Durable, water-resistant materials with IP55 protection",
            "Modern variants with Android OS integration",
            "Bluetooth connectivity for seamless workflows",
            "Powerful processors for efficient data handling",
            "Laser pointer for target aiming",
            "Robust memory for data storage",
            "Customizable options for specific applications",
            "Suitable for land surveying, topographic mapping, construction layout, and geodetic engineering",
            "OEM/ODM customization available",
            "One-year warranty for long-term performance",
            "30X magnification telescope with erect image",
            "1°30' field of view for comprehensive coverage",
            "Absolute encoder reading system",
            "Multiple measurement ranges: reflectorless, reflective sheet, single prism",
            "Dual axis compensator with ±3' working range",
            "Laser plummet with adjustable brightness",
            "Optional optical plummet for precise centering",
            "3.5\" colour TFT LCD touch screen with sunlight readable display",
            "Built-in temperature and pressure sensors",
            "Comprehensive application programs for surveying tasks"
        ],
        "specifications": {
            "Model": "RTS-342",
            "Telescope": {
                "Length/Image": "156mm/Erect",
                "Objective Aperture": "φ45mm",
                "Magnification": "30x",
                "Field of View": "1°30′",
                "Shortest Focus Distance": "1.0m"
            },
            "Angle Measurement": {
                "Reading System": "Absolute encoder",
                "Angle Unit": "360°/400gon/6400mil, selectable",
                "Angular Surveying Accuracy": "1\"",
                "Display Resolution": "0.1″/0.5″/1″(or 0.02mgon/0.1mgon/0.2mgon)",
                "Accuracy": "2\""
            },
            "Distance Measurement (R600)": {
                "Display Resolution": "0.1mm/1mm (m/inch selectable)",
                "Laser Class": {
                    "Prism": "Class 1",
                    "Reflectorless/Reflective sheet": "Class 3R"
                }
            },
            "Measurement Range (Good Condition)": {
                "Reflectorless": "1 to 600m",
                "Reflective sheet/RP60": "1 to 800m",
                "Single Prism": "1 to 5000m"
            },
            "Accuracy": {
                "Prism": "2mm+2ppm",
                "Reflective sheet/RP60": "3mm+2ppm",
                "Reflectorless": {
                    "1-150m": "3mm+2ppm",
                    "150-300m": "5mm+3ppm",
                    ">300m": "10mm+5ppm"
                }
            },
            "Measuring Time": {
                "Initial": "2s",
                "Prism": "Typ. 1.0-1.5s",
                "Reflective sheet/RP60": "Typ. 1.5s",
                "Reflectorless": "Typ. 1.5-5s, max. 20s"
            },
            "Level Vial Sensitivity": {
                "Plate Level Vial": "30″/2mm",
                "Circular Level Vial": "8′/2mm"
            },
            "Compensator": {
                "Type": "Dual axis compensator",
                "Working Range": "±3′",
                "Setting Accuracy": "1″"
            },
            "Laser Plummet (Standard)": {
                "Accuracy": "±1.0mm/1.5m",
                "Laser Class": "Class 2/IEC60825-1",
                "Laser Brightness": "Adjustable",
                "Laser Wave Length": "635nm"
            },
            "Optical Plummet (Factory Optional)": {
                "Accuracy": "±0.8mm/1.5m",
                "Image": "Erect",
                "Magnification": "3x",
                "Field of View": "4°",
                "Focus Range": "0.5m to ∞"
            },
            "Display": {
                "Type": "3.5\" colour TFT LCD (320 x 240 dots) touch screen",
                "Features": "Transflective sunlight readable display"
            },
            "Power": {
                "Battery": "3400mAh Li-ion Rechargeable",
                "Output Voltage": "7.4V DC",
                "Continuous Operation Time": "8 hours (Single distance measurement every 30 seconds)",
                "Charger": "FDJ6-LI (100V/240V)",
                "Charging Time (at +20ºC)": "Approx. 4 hours"
            },
            "Application Programs": [
                "Data collection/Stake out/Resection/REM/MLM/Point to line",
                "AREA/Z coordinate/OFFset/3D Road/Traverse adjustment",
                "Tape measurement/section/Axis positioning measurement"
            ],
            "Others": {
                "CPU": "ARM Cortex A8",
                "Memory": "4GB internal memory",
                "Sensors": "Built-in temperature and pressure sensors",
                "Keyboard": "Alphanumerical illuminated key board, both sides",
                "Guide Light System": "Factory optional",
                "Weight (including batteries)": "5.5kg",
                "Dimensions (WxDxH)": "185x220x360mm",
                "Interface": "USB host/USB slave/RS-232C/Bluetooth (Optional)",
                "Water and Dust Protection": "IP55 (IEC60529)",
                "Data Transfer & Processing Software": "FOIF Geomatics Office (FGO)",
                "Data Collector": "F58, fully rugged PDA (Optional)"
            }
        },
        "price": "3,46,505 + GST",
        "images": [
            "images/product_images/total station/FOIF/RTS 342/FOIF RTS 342.png",
            "images/product_images/total station/FOIF/RTS 342/FOIF RTS 342 IMAGES.jpg",
            "images/product_images/total station/FOIF/RTS 342/FOIF RTS 342 IMG.jpg"
        ],
        "alt": "FOIF RTS-342 Reliable Accuracy Simplified Total Station"
    },
    {
        "brand": "FOIF",
        "model": "RTS-362 R10",
        "product_name": "FOIF RTS-362 R10 - Power with Precision",
        "category": "Total Station",
        "description": "The FOIF RTS 362 R10 is a high-performance total station built for precise and efficient surveying. It offers reliable angle and distance measurement accuracy, ensuring dependable results across various field applications. With a rugged design, it withstands tough site conditions while maintaining consistent performance. Its user-friendly interface and fast data processing make operation smooth and efficient. Multiple connectivity options further enhance data transfer and workflow integration. Compact, durable, and accurate, the FOIF RTS 362 R10 is a trusted tool for professional surveyors.",
        "features": [
            "High-performance total station for precise and efficient surveying",
            "Reliable angle and distance measurement accuracy",
            "Dependable results across various field applications",
            "Rugged design that withstands tough site conditions",
            "Consistent performance in challenging environments",
            "User-friendly interface for smooth operation",
            "Fast data processing for efficient workflows",
            "Multiple connectivity options for enhanced data transfer",
            "Compact, durable, and accurate design",
            "Trusted tool for professional surveyors",
            "30X magnification telescope with erect image",
            "1°30' field of view for comprehensive coverage",
            "Absolute encoder reading system",
            "Multiple measurement ranges: reflectorless, reflective sheet, single prism",
            "Dual-axis compensator with ±3' working range",
            "Laser plummet with adjustable brightness",
            "3.5\" colour TFT LCD touch screen with sunlight readable display",
            "Built-in temperature and pressure sensors",
            "Comprehensive application programs for surveying tasks",
            "Endless drive HξV for enhanced operation",
            "Professional data transfer and processing capabilities"
        ],
        "specifications": {
            "Model": "RTS-362 R10",
            "Telescope": {
                "Length/Image": "156mm/Erect",
                "Objective Aperture": "φ45mm",
                "Magnification": "30x",
                "Field of View": "1°30'",
                "Shortest Focus Distance": "1.0m"
            },
            "Angle Measurement": {
                "Reading System": "Absolute encoder",
                "Angle Unit": "360°/400gon/6400mil, selectable",
                "Display Resolution": "0.5\"/1\"/5\"(0.1mgon/0.2mgon/1mgon)",
                "Accuracy": "2\""
            },
            "Distance Measurement (R500)": {
                "Display Resolution": "0.1mm/1mm (m/inch selectable)",
                "Laser Class": {
                    "Prism": "Class 1",
                    "Reflector/Reflective sheet": "Class 3R"
                }
            },
            "Measurement Range (Good Condition)": {
                "Reflectorless": "1 to 500m",
                "Reflective sheet/RP60": "1 to 800m",
                "Single Prism": "1 to 3000m"
            },
            "Accuracy": {
                "Prism": "2mm+2ppm",
                "Reflective sheet/RP60": "3mm+2ppm",
                "Reflectorless": {
                    "1-200m": "3mm+2ppm",
                    ">=200m": "5mm+3ppm"
                }
            },
            "Measuring Time": {
                "Initial": "2s",
                "Prism (Standard model)": "3s",
                "Reflective sheet/RP60 (Standard model)": "3s",
                "Reflectorless (Standard model)": "3s"
            },
            "Level Vial Sensitivity": {
                "Plate Level Vial": "30\"/2mm",
                "Circular Level Vial": "8'/2mm"
            },
            "Compensator": {
                "Type": "Dual-axis compensator",
                "Working Range": "±3'",
                "Setting Accuracy": "1\""
            },
            "Laser Plummet (Standard)": {
                "Accuracy": "±1mm/1.5m",
                "Laser Class": "Class 2/IEC60825-1",
                "Laser Brightness": "Adjustable",
                "Laser Wave Length": "635nm"
            },
            "Endless Drive": "HξV",
            "Display": {
                "Type": "3.5\" colour TFT LCD (320 x 240 dots) touch screen",
                "Features": "Transflective sunlight readable display"
            },
            "Power": {
                "Battery": "3400mAh Li-ion Rechargeable",
                "Output Voltage": "7.4V DC",
                "Continuous Operation Time": "8 hours (Single distance measurement every 30 seconds)",
                "Charger": "FDJ6-LI9 (100V/240V)",
                "Charging Time (at +20ºC)": "Approx. 4 hours"
            },
            "Application Programs": [
                "Data collection/Stake out/Resection/REM/MLM/Point to line",
                "AREA/Z coordinate/OFFset/3D Road/Traverse adjustment",
                "Tape measurement/Section/Axis positioning measurement"
            ],
            "Others": {
                "CPU": "ARM9 Core",
                "Memory": "4GB internal memory",
                "Sensors": "Built-in temperature and pressure sensors",
                "Keyboard": "Alphanumerical key board, both sides",
                "Weight (including batteries)": "6.0kg",
                "Interface": "USB/RS-232C/Bluetooth (Optional)",
                "Water and Dust Protection": "IP54 (IEC60529)"
            }
        },
        "price": "5,43,637 + GST",
        "images": [
            "images/product_images/total station/FOIF/RTS 362 R10/FOIF RTS 362.jpg",
            "images/product_images/total station/FOIF/RTS 362 R10/FOIF RTS 362 IMAGE.png",
            "images/product_images/total station/FOIF/RTS 362 R10/FOIF RTS 362 IMG.jpg",
            "images/product_images/total station/FOIF/RTS 362 R10/FOIF RTS 362 IMGS.jpg"
        ],
        "alt": "FOIF RTS-362 R10 Power with Precision Total Station"
    },
    {
        "brand": "FOIF",
        "model": "RTS-372 R10",
        "product_name": "FOIF RTS-372 R10 - Precision & Performance",
        "category": "Total Station",
        "description": "The FOIF RTS 372 R10 is a high-precision total station with a 1000m reflectorless range, excellent prism accuracy, and a redesigned, user-friendly panel. It features dual-axis compensation, an ultra-narrow laser beam, nitrided shaft durability, and a large high-resolution LCD with a laser guide light. Equipped with one-key measurement, electronic bubble display, laser plummet, and a long-lasting lithium battery, it is ideal for railway construction, monitoring, 3D measurement, and land surveying. Its rugged build ensures reliability in tough environments, while advanced functions make it a versatile tool for professionals. Designed for precision and efficiency, it delivers dependable performance in every project.",
        "features": [
            "High-precision total station with 1000m reflectorless range",
            "Excellent prism accuracy for reliable measurements",
            "Redesigned, user-friendly panel for easy operation",
            "Dual-axis compensation for enhanced accuracy",
            "Ultra-narrow laser beam for precise targeting",
            "Nitrided shaft durability for long-lasting performance",
            "Large high-resolution LCD with laser guide light",
            "One-key measurement for quick operations",
            "Electronic bubble display for accurate leveling",
            "Laser plummet for precise centering",
            "Long-lasting lithium battery for extended field work",
            "Ideal for railway construction, monitoring, 3D measurement, and land surveying",
            "Rugged build ensures reliability in tough environments",
            "Advanced functions make it a versatile tool for professionals",
            "Designed for precision and efficiency",
            "Dependable performance in every project",
            "30X magnification telescope with erect imaging",
            "1°30' field angle for comprehensive coverage",
            "Absolute encode angle measurement method",
            "2\" angle measure precision",
            "Multiple distance measurement capabilities",
            "High-precision time of 0.3 seconds",
            "Bi-axis compensation with ±3' working range",
            "More than 12 hours continuous working time",
            "Multiple communication options for data transfer"
        ],
        "specifications": {
            "Model": "RTS-372 R10",
            "Telescope": {
                "Imaging": "Erect",
                "Magnification": "30X",
                "Objective Lens Effective Aperture": "50mm",
                "Resolution": "3''",
                "Field Angle": "1°30′",
                "Shortest Sight Distance": "1m"
            },
            "Angle Measurement": {
                "Angle Measure Method": "Absolute Encode",
                "Angle Measure Precision": "2″",
                "Minimum Reading": "0.1″, 1″, 5″"
            },
            "Distance Measurement": {
                "Precision": "±(2mm+2×10⁻⁶·D)",
                "Distance Measurement": {
                    "Non-prism": "1000m",
                    "Reflector": "1000m",
                    "Single-prism": "5000m"
                },
                "High-Precision Time": "0.3s",
                "Minimum Reading": "0.1mm"
            },
            "Compensation": {
                "Method": "Bi-axis compensation",
                "Working Range": "±3′"
            },
            "Battery": {
                "Power Source": "Rechargeable NiMH Battery",
                "Voltage": "DC 7.4V",
                "Continuous Working Time": "More than 12 hours"
            },
            "Others": {
                "Display": "2 sides/8 lines",
                "Communication": "RS-232C/USB/SD card/Bluetooth (Optional)",
                "Water-proof & Dust-proof": "IP55"
            }
        },
        "images": [
            "images/product_images/total station/FOIF/RTS 372 R10/FOIF RTS 372 R10.jpg",
            "images/product_images/total station/FOIF/RTS 372 R10/FOIF RTS 372 R10 FRONT.jpg",
            "images/product_images/total station/FOIF/RTS 372 R10/FOIF RTS 372 R10 FRONTVIEW.jpg",
            "images/product_images/total station/FOIF/RTS 372 R10/FOIF RTS 372 R10 IMAGE.jpg",
            "images/product_images/total station/FOIF/RTS 372 R10/FOIF RTS 372 R10 IMG.jpg"
        ],
        "alt": "FOIF RTS-372 R10 Precision & Performance Total Station"
    },
    {
        "brand": "STONEX",
        "model": "R3",
        "product_name": "Stonex R3 Total Station - Precision Meets Performance",
        "category": "Total Station",
        "description": "The Stonex R3 total station uses advanced digital phase laser ranging technology to deliver high-precision measurements over long distances. In prism-free mode, it can achieve accurate targeting up to 800 meters, while with a single prism, it extends up to 3500 meters. Built for reliability, the R3 combines precision with durability, making it suitable for a wide range of surveying applications. Its rugged design ensures performance even in challenging environments, while user-friendly features enhance efficiency in the field.",
        "features": [
            "Advanced digital phase laser ranging technology",
            "High-precision measurements over long distances",
            "Prism-free mode accurate targeting up to 800 meters",
            "Single prism range extends up to 3500 meters",
            "Built for reliability with precision and durability",
            "Suitable for a wide range of surveying applications",
            "Rugged design ensures performance in challenging environments",
            "User-friendly features enhance efficiency in the field",
            "30× magnification telescope with erect imaging",
            "160mm lens tube length for optimal performance",
            "2.8″ resolution for clear viewing",
            "1°30' field of view for comprehensive coverage",
            "44mm effective aperture for excellent light gathering",
            "Absolute coding system for angle measurement",
            "2″ precision level for accurate measurements",
            "Switchable laser pointer for precise targeting",
            "Dual axis compensation with graphical method",
            "±4′ scope of work for compensation",
            "2.8 inch color screen with LCD backlight",
            "Full numeric keyboard for easy data entry",
            "USB interface and Bluetooth transmission capability",
            "Long-lasting lithium battery with 20+ hours operation",
            "IP54 waterproof and dustproof protection",
            "Wide operating temperature range for field use"
        ],
        "specifications": {
            "Model": "R3",
            "Telescope": {
                "Imaging": "Just like (Erect)",
                "Magnification": "30×",
                "Lens Tube Length": "160mm",
                "Resolution": "2.8″",
                "Field of View": "1°30'",
                "Effective Aperture": "44mm"
            },
            "Angle Measurement": {
                "Angle Measurement Method": "Absolute coding system",
                "Precision Level": "2″",
                "Minimum Display Reading": "1\"",
                "Display Unit": "360° / 400 gon / 6400 mil"
            },
            "Ranging Part": {
                "Ranging Light Source": "650~690nm",
                "Measure Time": "0.5s (quick test)",
                "Spot Diameter": "12mm×24mm (at 50m)",
                "Laser Pointing": "Switchable laser pointer",
                "Laser Class": "Class 3"
            },
            "Distance Measurement": {
                "No Prism": "800m",
                "Single Prism": "3500m",
                "Prism Accuracy": "2mm+2×10⁻⁶×D",
                "Prism-free Accuracy": "3mm+2×10⁻⁶×D",
                "Prism Constant Correction": "-99.9mm to +99.9mm",
                "Minimum Reading": {
                    "Precision Measurement Mode": "1mm",
                    "Tracking Measurement Mode": "10mm"
                }
            },
            "Environmental Correction": {
                "Temperature Setting Range": "−40ºC to +60ºC",
                "Temperature Range Step Size": "1ºC",
                "Atmospheric Pressure Correction": "500 hPa - 1500 hPa",
                "Atmospheric Pressure Step Length": "1hPa"
            },
            "Level": {
                "Long Level": "30″/2mm",
                "Circular Level": "8′/2mm"
            },
            "Laser Plummet": {
                "Wavelength": "635nm",
                "Laser Class": "Class 2",
                "Precision": "±1.5mm/1.5m",
                "Spot Size/Energy": "Adjustable",
                "Maximum Output Power": "0.7-1.0mW, adjustable through software switch"
            },
            "Compensator": {
                "Compensation Method": "Dual axis compensation",
                "Compensation Method": "Graphical",
                "Scope of Work": "±4′",
                "Resolution": "1\""
            },
            "Power Supply": {
                "Battery Type": "Lithium battery",
                "Voltage": "DC 7.4V",
                "Operating Hours": {
                    "About 20h (25ºC, measurement + distance measurement, interval 30s)": "Full operation",
                    "Only when measuring angle": ">24h"
                }
            },
            "Display/Button": {
                "Types": "2.8 inch color screen",
                "Illumination": "LCD backlight",
                "Button": "Full numeric keyboard"
            },
            "Data Transmission": {
                "Interface Type": "USB interface",
                "Bluetooth Transmission": "Stand by"
            },
            "Environmental Indicators": {
                "Operating Temperature": "-20ºC to 50ºC",
                "Storage Temperature": "-40ºC to 60ºC",
                "Waterproof and Dustproof": "IP54"
            }
        },
        "price": "₹ 2,31,012 + GST",
        "images": [
            "images/product_images/total station/STONEX/R3/stonex r3.jpg",
            "images/product_images/total station/STONEX/R3/Stonex r3 image.jpg",
            "images/product_images/total station/STONEX/R3/Stonex r3 images.jpg",
            "images/product_images/total station/STONEX/R3/stonex r3 img.jpg"
        ],
        "alt": "Stonex R3 Total Station Precision Meets Performance"
    },
    {
        "brand": "STONEX",
        "model": "S3II S700",
        "product_name": "STONEX S3II S700 - Advanced GNSS RTK Receiver",
        "category": "RTK Receiver",
        "description": "The Stonex S3II and S700A are compact, high-performance GNSS receivers designed for professional surveying and mapping. Equipped with 700-channel multi-constellation boards supporting GPS, GLONASS, Galileo, BeiDou, QZSS, and IRNSS, they deliver centimeter-level accuracy via RTK technology. An internal antenna integrates GNSS, Bluetooth, and Wi-Fi for stable signal reception, while a Linux OS with WEB UI ensures user-friendly operation. With IP67-rated rugged design, a high-capacity battery, 4G modem, and Type-C connectivity, these receivers offer durable, all-day field performance. Compatible with Cube A and other surveying software, they support multiple data formats including shapefiles, DXF, CSV, and KML for seamless workflow integration.",
        "features": [
            "Compact, high-performance GNSS receivers for professional surveying",
            "700-channel multi-constellation boards for comprehensive satellite tracking",
            "Multi-constellation support (GPS, GLONASS, Galileo, BeiDou, QZSS, IRNSS)",
            "Centimeter-level accuracy via RTK technology",
            "Internal antenna integrating GNSS, Bluetooth, and Wi-Fi",
            "Stable signal reception in challenging environments",
            "Linux OS with WEB UI for user-friendly operation",
            "IP67-rated rugged design for field durability",
            "High-capacity battery for all-day field performance",
            "4G modem for connectivity",
            "Type-C connectivity for data transfer",
            "Compatible with Cube A and other surveying software",
            "Support for multiple data formats (shapefiles, DXF, CSV, KML)",
            "Seamless workflow integration",
            "Professional surveying and mapping applications",
            "Accurate, portable, and reliable performance"
        ],
        "specifications": {
            "Model": "S3II S700",
            "GNSS Features": {
                "Channels": "700",
                "Satellite Systems": {
                    "GPS": "L1, L2, L5",
                    "GLONASS": "L1, L2",
                    "Galileo": "E1, E5a, E5b",
                    "BeiDou": "B1, B2, B3",
                    "QZSS": "L1, L2, L5",
                    "IRNSS": "L5"
                }
            },
            "Connectivity": {
                "Internal Antenna": "GNSS, Bluetooth, and Wi-Fi integration",
                "Operating System": "Linux OS with WEB UI",
                "4G Modem": "Built-in 4G connectivity",
                "Type-C": "Data transfer and charging"
            },
            "Environmental": {
                "Protection": "IP67-rated rugged design",
                "Battery": "High-capacity battery for all-day performance"
            },
            "Software Compatibility": {
                "Surveying Software": "Cube A and other surveying software",
                "Data Formats": "Shapefiles, DXF, CSV, KML support"
            }
        },
        "price": "₹ 5,61,558 + GST",
        "images": [
            "images/product_images/GNSS/STONEX/S3II S700 GNSS RTK/stonex s311 s700.jpg",
            "images/product_images/GNSS/STONEX/S3II S700 GNSS RTK/stonex s311 s700 images.jpg",
            "images/product_images/GNSS/STONEX/S3II S700 GNSS RTK/stonex s311 s700 img.png"
        ],
        "alt": "STONEX S3II S700 Advanced GNSS RTK Receiver"
    },
    {
        "brand": "Ruide",
        "model": "RQS",
        "product_name": "Ruide RQS - Smart Precision, Simplified",
        "category": "Total Station",
        "description": "The RUIDE RQS is a high-performance electronic total station designed for modern land surveying and topography. With 2\" angle accuracy, dual-axis compensation, and a measuring range of up to 5000m with prism and 600m without, it ensures reliable precision in all conditions. Running on a Linux-based OS with Android app support, it offers smooth operation, efficient workflows, and easy data transfer via USB 2.0. Equipped with internal memory, an ATMO sensor for automatic atmospheric correction, and a long-lasting Li-ion battery providing up to 16 hours of use, the RUIDE RQS is a dependable choice for surveyors.",
        "features": [
            "High-performance electronic total station for modern land surveying",
            "2\" angle accuracy for precise measurements",
            "Dual-axis compensation for reliable leveling",
            "Measuring range up to 5000m with prism and 600m without prism",
            "Linux-based OS with Android app support",
            "Smooth operation and efficient workflows",
            "Easy data transfer via USB 2.0",
            "Internal memory for data storage",
            "ATMO sensor for automatic atmospheric correction",
            "Long-lasting Li-ion battery providing up to 16 hours of use",
            "Compact design engineered for modern surveying needs",
            "Combines speed, precision, and ease of use",
            "Reliable accuracy in all field conditions",
            "Advanced functionality in compact design",
            "Dependable choice for professional surveyors"
        ],
        "specifications": {
            "Model": "RQS",
            "Angle Measurement": {
                "Accuracy": "2\""
            },
            "Distance Measurement": {
                "With Prism": "Up to 5000m",
                "Without Prism (Reflectorless)": "Up to 600m"
            },
            "Compensator": {
                "Type": "Dual-axis compensation"
            },
            "Operating System": {
                "OS": "Linux-based with Android app support"
            },
            "Sensors": {
                "Atmospheric Correction": "ATMO sensor for automatic atmospheric correction"
            },
            "Communication": {
                "Data Transfer": "USB 2.0"
            },
            "Memory": {
                "Internal Storage": "Internal memory for data storage"
            },
            "Power Supply": {
                "Battery Type": "Li-ion battery",
                "Battery Life": "Up to 16 hours of continuous use"
            },
            "Design": {
                "Form Factor": "Compact design",
                "Application": "Modern surveying and construction needs"
            }
        },
        "price": "₹ 3,24,600 + GST",
        "images": [
            "images/product_images/total station/Ruide/RQS/RUIDE RQS IMAGE.jpg",
            "images/product_images/total station/Ruide/RQS/RUIDE RQS FRONT.jpg",
            "images/product_images/total station/Ruide/RQS/RUIDE RQS ALL.jpg",
            "images/product_images/total station/Ruide/RQS/RUIDE RQS SIDE.jpg"
        ],
        "alt": "Ruide RQS Smart Precision Simplified Total Station"
    },
    {
        "brand": "Ruide",
        "model": "RCS",
        "product_name": "Ruide RCS - Compact Power, Maximum Precision",
        "category": "Total Station",
        "description": "The RUIDE RCS is a reliable manual total station built for precision and durability in surveying tasks. With 2-second angular accuracy, non-prism measurement up to 1000m, and a dual-axis compensation system, it delivers dependable results in the field. Features like UltraPlumb for automatic height measurement, integrated guide lights, and automatic temperature and atmospheric correction further enhance accuracy and efficiency. Its user-friendly 640x320 color touch LCD with dual display, Bluetooth and USB connectivity, and rapid-fire button ensure smooth operation and fast data handling. Designed with a rugged IP65 protection rating and stable ball shaft rotation, the RCS is a trusted solution for professional land surveying in tough environments.",
        "features": [
            "Reliable manual total station for precision and durability",
            "2-second angular accuracy for dependable results",
            "Non-prism measurement up to 1000m",
            "Dual-axis compensation system for enhanced accuracy",
            "UltraPlumb for automatic height measurement",
            "Integrated guide lights for improved targeting",
            "Automatic temperature and atmospheric correction",
            "User-friendly 640x320 color touch LCD with dual display",
            "Bluetooth and USB connectivity for data transfer",
            "Rapid-fire button for efficient operation",
            "Rugged IP65 protection rating for tough environments",
            "Stable ball shaft rotation for consistent performance",
            "Professional land surveying solution",
            "Compact and lightweight design",
            "Easy to use and maintain"
        ],
        "specifications": {
            "Model": "RCS",
            "Angle Accuracy": "2 seconds",
            "Distance Measurement": {
                "Non-prism": "Up to 1000m",
                "Prism": "Up to 5000m"
            },
            "Compensation": "Dual-axis compensation system",
            "Display": {
                "Type": "640x320 color touch LCD",
                "Features": "Dual display capability"
            },
            "Connectivity": {
                "Bluetooth": "Yes",
                "USB": "Yes"
            },
            "Protection": "IP65 rating",
            "Special Features": {
                "UltraPlumb": "Automatic height measurement",
                "Guide Lights": "Integrated for improved targeting",
                "Atmospheric Correction": "Automatic temperature and pressure correction"
            },
            "Operation": {
                "Rapid-fire Button": "For efficient data collection",
                "Ball Shaft Rotation": "Stable and consistent"
            }
        },
        "price": "₹ 4,18,189 + GST",
        "images": [
            "images/product_images/total station/Ruide/RCS/RUIDE RCS FRONT.jpg",
            "images/product_images/total station/Ruide/RCS/RUIDE RCS IMAGE.jpg",
            "images/product_images/total station/Ruide/RCS/RUIDE RCS IMAGES.jpg",
            "images/product_images/total station/Ruide/RCS/RUIDE RCS IMG.jpg"
        ],
        "alt": "Ruide RCS Compact Power Maximum Precision Total Station"
    },
    {
        "brand": "Ruide",
        "model": "RIS",
        "product_name": "Ruide RIS - Innovation Meets Simplicity",
        "category": "Total Station",
        "description": "The Ruide RIS is a high-precision total station designed for land surveying, offering 30x magnification and 2-second angle accuracy. It ensures reliable long-range measurement of up to 1000m without a prism and 5km with a prism, making it versatile for different projects. A 3.7-inch color touch screen with an alphanumeric keyboard provides simple and user-friendly operation. Advanced features like Q-MEAS fast trigger, Atmosence for auto temperature and pressure correction, and Ultra Plumb for automatic height measurement enhance efficiency. Data transfer is made easy with USB, SD card, Bluetooth, and an integrated 0.8MP camera. Built with an IP65-rated rugged design and powered by a 3900mAh battery, the RIS is durable and reliable for all-day field use.",
        "features": [
            "High-precision total station for land surveying",
            "30x magnification telescope for clear viewing",
            "2-second angle accuracy for precise measurements",
            "1000m reflectorless range without prism",
            "5km range with prism for long-distance measurements",
            "3.7-inch color touch screen for easy operation",
            "Alphanumeric keyboard for data entry",
            "Q-MEAS fast trigger for quick measurements",
            "Atmosence auto temperature and pressure correction",
            "Ultra Plumb for automatic height measurement",
            "Multiple data transfer options: USB, SD card, Bluetooth",
            "Integrated 0.8MP camera for documentation",
            "IP65-rated rugged design for field durability",
            "3900mAh battery for all-day field use",
            "Compact and efficient design",
            "User-friendly operation interface",
            "Versatile for different project scales",
            "Seamless performance for surveying and construction"
        ],
        "specifications": {
            "Model": "RIS",
            "Telescope": {
                "Magnification": "30x",
                "Image": "Erect"
            },
            "Angle Measurement": {
                "Accuracy": "2 seconds",
                "Method": "Absolute encoding"
            },
            "Distance Measurement": {
                "Reflectorless Range": "1000m",
                "Prism Range": "5000m",
                "Accuracy": "±(2mm + 2ppm) with prism, ±(3mm + 2ppm) reflectorless"
            },
            "Display": {
                "Type": "3.7-inch color touch screen",
                "Keyboard": "Alphanumeric keyboard"
            },
            "Advanced Features": {
                "Q-MEAS": "Fast trigger measurement",
                "Atmosence": "Auto temperature and pressure correction",
                "Ultra Plumb": "Automatic height measurement"
            },
            "Data Transfer": {
                "USB": "Supported",
                "SD Card": "Supported",
                "Bluetooth": "Supported"
            },
            "Camera": {
                "Resolution": "0.8MP",
                "Function": "Documentation and imaging"
            },
            "Power": {
                "Battery": "3900mAh",
                "Operating Time": "All-day field use"
            },
            "Environmental": {
                "Protection": "IP65-rated",
                "Design": "Rugged for field conditions"
            }
        },
        "price": "₹ 5,07,795 + GST",
        "images": [
            "images/product_images/total station/Ruide/RIS/RUIDE RIS IMAGE.jpg",
            "images/product_images/total station/Ruide/RIS/RUIDE RIS FRONT.jpg",
            "images/product_images/total station/Ruide/RIS/RUIDE RIS SIDE.jpg",
            "images/product_images/total station/Ruide/RIS/RUIDE RIS IMG.jpg"
        ],
        "alt": "Ruide RIS Innovation Meets Simplicity Total Station"
    },
    {
        "brand": "HI TARGET",
        "model": "ZTS 420R",
        "product_name": "HI TARGET ZTS 420R - Performance Meets Reliability",
        "category": "Total Station",
        "description": "The Hi-Target ZTS-420R is a dual-axis reflectorless total station built for precision and efficiency, featuring a dual-axis compensator for error elimination and an absolute encoding system for stable, immediate angle measurement. With 2mm + 2ppm prism accuracy and 3mm + 2ppm reflectorless accuracy up to 600m, it ensures high reliability in diverse surveying tasks. Its real-time operating system allows instant readiness without initialization delays, while built-in temperature and air pressure sensors provide precise PPM compensation. Data transfer is flexible through Bluetooth, USB, RS232, and SD card support. Rugged and versatile, the ZTS-420R is ideal for surveying, engineering, and construction projects.",
        "features": [
            "Dual-axis reflectorless total station for precision and efficiency",
            "Dual-axis compensator for error elimination",
            "Absolute encoding system for stable, immediate angle measurement",
            "2mm + 2ppm prism accuracy for high precision",
            "3mm + 2ppm reflectorless accuracy up to 600m",
            "Real-time operating system for instant readiness",
            "Built-in temperature and air pressure sensors",
            "Precise PPM compensation for accurate measurements",
            "Flexible data transfer: Bluetooth, USB, RS232, SD card support",
            "Rugged and versatile design for field conditions",
            "Ideal for surveying, engineering, and construction projects",
            "Compact design with advanced features",
            "User-friendly operation for efficient workflow",
            "High reliability in diverse surveying tasks"
        ],
        "specifications": {
            "Model": "ZTS 420R",
            "Type": "Dual-axis reflectorless total station",
            "Angle Measurement": {
                "System": "Absolute encoding system",
                "Performance": "Stable, immediate angle measurement"
            },
            "Distance Measurement": {
                "Prism Accuracy": "2mm + 2ppm",
                "Reflectorless Accuracy": "3mm + 2ppm",
                "Reflectorless Range": "Up to 600m"
            },
            "Compensation": {
                "Type": "Dual-axis compensator",
                "Function": "Error elimination"
            },
            "Operating System": "Real-time operating system",
            "Initialization": "Instant readiness without delays",
            "Environmental Sensors": {
                "Temperature Sensor": "Built-in",
                "Air Pressure Sensor": "Built-in",
                "Compensation": "Precise PPM compensation"
            },
            "Data Transfer": {
                "Bluetooth": "Supported",
                "USB": "Supported",
                "RS232": "Supported",
                "SD Card": "Supported"
            },
            "Applications": [
                "Surveying",
                "Engineering",
                "Construction projects"
            ]
        },
        "price": "₹ 2,38,977 + GST",
        "images": [
            "images/product_images/total station/HI TARGET/ZTS 420R/HI TARGET ZTS 420R.jpg",
            "images/product_images/total station/HI TARGET/ZTS 420R/HI TARGET ZTS 420R IMAGE.jpg",
            "images/product_images/total station/HI TARGET/ZTS 420R/HI TARGET ZTS 420R IMG.png",
            "images/product_images/total station/HI TARGET/ZTS 420R/HI TARGET ZTS 420R.png"
        ],
        "alt": "HI TARGET ZTS 420R Performance Meets Reliability Total Station"
    },
    {
        "brand": "STONEX",
        "model": "R2C",
        "product_name": "STONEX R2C - Compact Precision, Redefined",
        "category": "Total Station",
        "description": "The Stonex R2C (2020) is designed for comfort and precision, featuring endless friction drives that allow smooth, continuous horizontal and vertical rotations without the need for knobs or clamps. This ensures easier handling and greater flexibility during fieldwork. The side trigger key provides secure and accurate measurements, delivering the same reliability as a traditional clamp lock system. Rugged and user-friendly, the R2C is built to enhance efficiency while maintaining high standards of performance in surveying tasks.",
        "features": [
            "Compact precision total station with endless friction drives",
            "Smooth, continuous horizontal and vertical rotations",
            "No knobs or clamps required for operation",
            "Side trigger key for secure and accurate measurements",
            "Reliable performance comparable to traditional clamp lock systems",
            "Rugged and user-friendly design",
            "Enhanced efficiency for surveying tasks",
            "Lightweight and compact design",
            "Fast, reliable and easy to use",
            "Built for comfort and precision",
            "Suitable for various surveying applications",
            "Durable construction for field conditions"
        ],
        "specifications": {
            "Model": "R2C",
            "Type": "Total Station",
            "Drive System": "Endless friction drives",
            "Rotation": "Smooth, continuous horizontal and vertical rotations",
            "Control": "Side trigger key operation",
            "Design": "Compact and lightweight",
            "Operation": "No knobs or clamps required",
            "Performance": "High precision measurements",
            "Reliability": "Comparable to traditional clamp lock systems",
            "Durability": "Rugged construction for field use",
            "User Interface": "User-friendly operation",
            "Applications": "Surveying, construction, engineering"
        },
        "price": "₹ 2,94,956 + GST",
        "images": [
            "images/product_images/total station/STONEX/R2C/Stonex R2C.jpg",
            "images/product_images/total station/STONEX/R2C/Stonex R2C Image.jpg",
            "images/product_images/total station/STONEX/R2C/Stonex R2C Images.jpg",
            "images/product_images/total station/STONEX/R2C/Stonex R2C Img.jpg"
        ],
        "alt": "STONEX R2C Compact Precision Total Station"
    },
    {
        "brand": "STONEX",
        "model": "R2",
        "product_name": "STONEX R2 - Precision with Reliability",
        "category": "Total Station",
        "description": "The Stonex R2 is a dual-axis total station designed for precision surveying, featuring a high-performance optical structure, laser pointing, and automatic biaxial compensation for accurate leveling. It offers real-time meteorological corrections with built-in sensors, ensuring reliable results in varying conditions. The Windows-based interface and support for SD cards and USB make data management seamless and efficient. With an IP66-rated rugged design, the R2 withstands dust, water, and tough field environments. A long-lasting lithium battery supports extended use, while the alphanumeric keyboard and high-resolution LCD enhance usability. Ideal for construction, mapping, infrastructure, and land surveying, the Stonex R2 ensures durability, precision, and efficiency.",
        "features": [
            "Dual-axis total station for precision surveying",
            "High-performance optical structure with laser pointing",
            "Automatic biaxial compensation for accurate leveling",
            "Real-time meteorological corrections with built-in sensors",
            "Windows-based interface for seamless operation",
            "SD card and USB support for efficient data management",
            "IP66-rated rugged design for tough field environments",
            "Dust and water resistant construction",
            "Long-lasting lithium battery for extended use",
            "Alphanumeric keyboard for easy data entry",
            "High-resolution LCD display for clear visibility",
            "Ideal for construction, mapping, infrastructure, and land surveying",
            "Durable, precise, and efficient performance",
            "Reliable results in varying environmental conditions"
        ],
        "specifications": {
            "Model": "R2",
            "Type": "Dual-axis Total Station",
            "Optical System": "High-performance optical structure",
            "Pointing System": "Laser pointing capability",
            "Compensation": "Automatic biaxial compensation",
            "Meteorological Correction": "Real-time with built-in sensors",
            "Operating System": "Windows-based interface",
            "Data Storage": "SD card and USB support",
            "Environmental Protection": "IP66-rated rugged design",
            "Power Supply": "Long-lasting lithium battery",
            "User Interface": {
                "Keyboard": "Alphanumeric keyboard",
                "Display": "High-resolution LCD"
            },
            "Applications": [
                "Construction surveying",
                "Mapping",
                "Infrastructure projects",
                "Land surveying"
            ]
        },
        "price": "₹ 2,66,853 + GST",
        "images": [
            "images/product_images/total station/STONEX/R2/Stonex R2.jpg",
            "images/product_images/total station/STONEX/R2/Stonex R2 Image.jpg",
            "images/product_images/total station/STONEX/R2/Stonex R2 iMAGES.jpg",
            "images/product_images/total station/STONEX/R2/Stonex R2 img.jpg"
        ],
        "alt": "STONEX R2 Precision with Reliability Total Station"
    }
];

// Export the product data for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = productData;
}
