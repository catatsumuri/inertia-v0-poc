import { Form, Head } from '@inertiajs/react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
/* @chisel-registration */
import { register } from '@/routes';
/* @end-chisel-registration */
import { store } from '@/routes/login';
import { request } from '@/routes/password';
/* @chisel-passkeys */
import PasskeyVerify from '@/components/passkey-verify';
/* @end-chisel-passkeys */

type Props = {
    status?: string;
    canResetPassword: boolean;
};

export default function Login({ status, canResetPassword }: Props) {
    return (
        <>
            <Head title="Log in" />

            {/* @chisel-passkeys */}
            <PasskeyVerify />
            {/* @end-chisel-passkeys */}

            <Form
                {...store.form()}
                resetOnSuccess={['password']}
                className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
                {({ processing, errors }) => (
                    <>
                        <div className="grid gap-5">
                            <div className="grid gap-2">
                                <Label className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500" htmlFor="email">Email address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="email"
                                    placeholder="you@company.com"
                                    className="h-11 rounded-xl border-slate-200 bg-slate-50/70 px-4 shadow-none transition focus-visible:border-cyan-400 focus-visible:ring-cyan-400/20"
                                />
                                <InputError message={errors.email} />
                            </div>

                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500" htmlFor="password">Password</Label>
                                    {canResetPassword && (
                                        <TextLink
                                            href={request()}
                                            className="ml-auto text-sm font-medium text-cyan-700 hover:text-cyan-600"
                                            tabIndex={5}
                                        >
                                            Forgot your password?
                                        </TextLink>
                                    )}
                                </div>
                                <PasswordInput
                                    id="password"
                                    name="password"
                                    required
                                    tabIndex={2}
                                    autoComplete="current-password"
                                    placeholder="Enter your password"
                                    className="h-11 rounded-xl border-slate-200 bg-slate-50/70 px-4 shadow-none transition focus-within:border-cyan-400 focus-within:ring-cyan-400/20"
                                />
                                <InputError message={errors.password} />
                            </div>

                            <div className="flex items-center gap-3 rounded-xl bg-slate-50/70 px-3 py-2.5">
                                <Checkbox
                                    id="remember"
                                    name="remember"
                                    tabIndex={3}
                                />
                                <Label htmlFor="remember">Remember me</Label>
                            </div>

                            <Button
                                type="submit"
                                className="mt-4 h-11 w-full rounded-xl bg-cyan-400 font-semibold text-slate-950 shadow-[0_12px_30px_-12px_rgba(34,211,238,0.9)] transition hover:bg-cyan-300"
                                tabIndex={4}
                                disabled={processing}
                                data-test="login-button"
                            >
                                {processing && <Spinner />}
                                Log in
                            </Button>
                        </div>

                        {/* @chisel-registration */}
                        <div className="text-center text-sm text-slate-500">
                            {"Don't have an account?"}{' '}
                            <TextLink className="font-semibold text-cyan-700 hover:text-cyan-600" href={register()} tabIndex={5}>
                                Sign up
                            </TextLink>
                        </div>
                        {/* @end-chisel-registration */}
                    </>
                )}
            </Form>

            {status && (
                <div className="mb-4 text-center text-sm font-medium text-green-600">
                    {status}
                </div>
            )}
        </>
    );
}

Login.layout = {
    title: 'Log in to your account',
    description: 'Enter your email and password below to log in',
};
