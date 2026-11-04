// The real PasskeyVerify component consumes this hook in UI-preview mode.
// WebAuthn and authentication endpoints are intentionally not invoked.
import { useState } from 'react';

export function usePasskeyVerify(_options?: unknown) {
    const [error, setError] = useState<string | null>(null);
    return {
        isSupported: true,
        isLoading: false,
        error,
        verify: () => setError('Passkey authentication is unavailable in the UI mock.'),
    };
}
