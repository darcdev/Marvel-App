src/
├── app/
│   ├── core/                     # Core functionality
│   │   ├── guards/              # Route guards
│   │   ├── interceptors/        # HTTP interceptors
│   │   ├── services/            # Singleton services
│   │   └── models/              # Core interfaces/types
│   │
│   ├── data/                    # Data layer
│   │   ├── repositories/        # Repository implementations
│   │   ├── datasources/         # API/Local storage services
│   │   └── models/              # Data transfer objects (DTOs)
│   │
│   ├── domain/                  # Domain layer
│   │   ├── entities/            # Business entities
│   │   ├── repositories/        # Repository interfaces
│   │   └── usecases/           # Use cases/business logic
│   │
│   ├── presentation/           # Presentation layer
│   │   ├── pages/             # Page components
│   │   ├── components/        # UI components
│   │   ├── directives/        # Custom directives
│   │   └── pipes/             # Custom pipes
│   │
│   └── shared/                # Shared functionality
       ├── components/         # Shared components
       ├── directives/        # Shared directives
       ├── pipes/             # Shared pipes
       └── utils/             # Utility functions 