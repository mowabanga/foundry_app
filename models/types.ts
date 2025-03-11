export interface AuthRequest {
    value: string;
    password: string;
}

export interface AuthResponse {
    token: string;
    token_type: string;
    user: UserProfile;
}

export interface UserProfile {
    id: string;
    email?: string;
    phone?: string;
    name?: string;
    created_at: string;
    updated_at: string;
}

export interface PaymentMethod{
    id: string;
    title: string;
    description: string;
    active?: boolean;
    created_at?: string;
    updated_at?: string;
}

export interface UpdatePaymentMethodRequest {
    id: string;
    title: string;
    description: string;
    active?: boolean;
}

export interface TransactionItem {
    id: string;
    title: string;
    description: string;
    active: boolean;
    created_at?: string;
    updated_at?: string;
}

export interface CreateTransactionItemRequest {
    title: string;
    description: string;
}

export interface UpdateTransactionItemRequest {
    id: string;
    title: string;
    description: string;
    active?: boolean;
}

export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
    errors?: any;
}